/**
 * A centralized utility for making API requests with robust error handling and timeouts.
 */

// Error class for standardized API errors
export class APIError extends Error {
    constructor(
        message: string,
        public status?: number,
        public code?: string
    ) {
        super(message);
        this.name = 'APIError';
    }
}

interface FetchOptions extends RequestInit {
    timeoutMs?: number;
}

/**
 * Wrapper around native fetch that adds a timeout to prevent hanging requests.
 */
export async function fetchWithTimeout(url: string, options: FetchOptions = {}) {
    // Default timeout of 10 seconds. Vercel hobby tier cold starts can take a few seconds.
    const { timeoutMs = 10000, ...fetchOptions } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, {
            ...fetchOptions,
            signal: controller.signal,
        });

        clearTimeout(id);

        // Check for HTTP errors (4xx or 5xx)
        if (!response.ok) {
            let errorMessage = "An unexpected error occurred.";
            
            // Try to parse the JSON error payload from the server if it exists
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorData.error || errorMessage;
            } catch (jsonError) {
                // If it's not JSON (e.g., a raw 502 Bad Gateway HTML page from Vercel)
                if (response.status >= 500) {
                     errorMessage = "The server is currently unavailable. Please try again later.";
                } else if (response.status >= 400) {
                     errorMessage = "There was a problem with your request. Please check your data.";
                }
            }

            throw new APIError(errorMessage, response.status);
        }

        // Return parsed JSON for successful requests
        // (Assuming all our API endpoints return JSON)
        return await response.json();
    } catch (error: any) {
        clearTimeout(id);

        // Map Timeout errors specifically
        if (error.name === 'AbortError') {
            throw new APIError('The request timed out. Please check your connection and try again.', 408, 'TIMEOUT');
        }
        
        // Map Network errors (e.g. CORS failure, no internet)
        if (error.message.includes('fetch') || error.message.includes('NetworkError') || error.name === 'TypeError') {
            throw new APIError('Unable to connect to the server. Please check your network connection.', undefined, 'NETWORK_ERROR');
        }

        // Re-throw if it's already our organized APIError
        if (error instanceof APIError) {
            throw error;
        }

        // Generic fallback for any other unexpected errors
        throw new APIError(error.message || 'An unexpected error occurred.', undefined, 'UNKNOWN_ERROR');
    }
}
