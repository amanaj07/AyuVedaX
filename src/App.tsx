import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import {
  ProtectedRoute,
  AdminRoute,
  DoctorRoute,
  PatientRoute,
} from "@/components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { AdminDashboard } from "./pages/dashboards/AdminDashboard";
import { DoctorDashboard } from "./pages/dashboards/DoctorDashboard";
import { PatientDashboard } from "./pages/dashboards/PatientDashboard";
import About from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Appointment from "./pages/Appointment";
import DoctorLogin from "./pages/DoctorLogin";
import Doctors from "./pages/Doctors";
import JoinNetwork from "./pages/JoinNetwork";
import Resources from "./pages/Resources";
import Support from "./pages/Support";
import WhatsAppButton from "@/components/WhatsAppButton"; // Add this line

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Auth mode="login" />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor-login" element={<DoctorLogin />} />
            <Route path="/join-network" element={<JoinNetwork />} />
            <Route path="/support" element={<Support />} />

            {/* WhatsApp route */}
            <Route
              path="/whatsapp"
              element={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 100,
                  }}
                >
                  <h2>Connect on WhatsApp</h2>
                  <p>Click the button below to start a WhatsApp chat:</p>
                  <a
                    href="https://wa.me/918303011760"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginTop: "16px",
                    }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              }
            />

            {/* Protected routes */}
            <Route
              path="/appointment"
              element={
                <ProtectedRoute>
                  <Appointment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <ProtectedRoute allowedRoles={["doctor", "admin"]}>
                  <Resources />
                </ProtectedRoute>
              }
            />

            {/* Role-specific dashboard routes */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/doctor/dashboard"
              element={
                <DoctorRoute>
                  <DoctorDashboard />
                </DoctorRoute>
              }
            />
            <Route
              path="/patient/dashboard"
              element={
                <PatientRoute>
                  <PatientDashboard />
                </PatientRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton /> {/* Add floating WhatsApp button */}
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
