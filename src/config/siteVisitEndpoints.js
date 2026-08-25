/**
 * SITE VISIT ENDPOINTS - SRD (Shared Reusable Data)
 * Central mapping of page keys → API POST endpoints.
 * All endpoints now point to the backend to avoid CORS issues with sell.do.
 */

// Use environment variable for backend URL, fallback to localhost:5000 for local development
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; // Set VITE_API_BASE_URL in your .env for production

export const SITE_VISIT_ENDPOINTS = {
  Contact: "http://localhost:5000/api/enquiries",
  VooraAgastya: "http://localhost:5000/api/enquiries",
  VooraBeckford: "http://localhost:5000/api/enquiries",
  VooraHighwayHaven: "http://localhost:5000/api/enquiries",
  VooraOceans27: "http://localhost:5000/api/enquiries",
  VooraOneSea: "http://localhost:5000/api/enquiries",
  VooraTechEdge: "http://localhost:5000/api/enquiries",
  VooraVidyasagarTblock: "http://localhost:5000/api/enquiries",
  VooraWestside: "http://localhost:5000/api/enquiries",
  Services: "http://localhost:5000/api/enquiries",
};