"use client";

import { useState } from "react";
import { services } from "./serviceData";

// Sign up at https://formspree.io, create a form, and paste your form ID below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FieldErrors {
  fullName?: string;
  email?: string;
  businessName?: string;
}

export default function QuoteForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleServiceChange = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = (): number =>
    selectedServices.reduce((total, serviceId) => {
      const service = services.find((item) => item.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

  const formatPrice = (price: number): string =>
    `J$${price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    if (!fullName.trim()) errors.fullName = "Full name is required.";
    if (!email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!businessName.trim()) errors.businessName = "Business name is required.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    const selectedServiceNames = selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          businessName,
          projectDetails: projectDetails || "No details provided.",
          services: selectedServiceNames,
          estimatedTotal: formatPrice(calculateTotal()),
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const total = calculateTotal();
  const isDisabled = selectedServices.length === 0 || status === "loading";

  const inputClassName =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const errorClassName = "mt-1.5 text-sm text-red-600";

  return (
    <section id="quote" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Instant Estimate
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Build your quote and see your live total before you reach out
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Choose the services you need, add your project details, and send a
              cleaner request when you&apos;re ready.
            </p>
            <div className="mt-8 rounded-[2rem] border border-blue-100 bg-blue-50/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Live Total
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
                {formatPrice(total)}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                All prices are shown in Jamaican Dollars and update instantly
                based on your selected services.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-45px_rgba(15,23,42,0.45)] sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                  Quote Request Sent
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Thanks, {fullName.split(" ")[0]}! We&apos;ve received your estimate
                  request and will be in touch at{" "}
                  <span className="font-medium text-slate-900">{email}</span> shortly.
                </p>
                <div className="mt-6 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left">
                  <p className="text-sm font-semibold text-slate-700">Your estimate</p>
                  <p className="mt-2 text-3xl font-semibold text-blue-700">
                    {formatPrice(total)}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {selectedServices.map((id) => {
                      const service = services.find((s) => s.id === id);
                      return service ? (
                        <li key={id} className="flex justify-between text-sm text-slate-600">
                          <span>{service.name}</span>
                          <span className="font-medium">{formatPrice(service.price)}</span>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setSelectedServices([]);
                    setFullName("");
                    setEmail("");
                    setBusinessName("");
                    setProjectDetails("");
                    setFieldErrors({});
                  }}
                  className="mt-6 text-sm font-medium text-blue-700 underline-offset-2 hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Select your services
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Pick at least one service to unlock your estimate request.
                  </p>
                </div>

                <div className="space-y-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`block cursor-pointer rounded-2xl border p-4 transition ${
                        selectedServices.includes(service.id)
                          ? "border-blue-500 bg-blue-50 shadow-sm"
                          : "border-slate-200 bg-slate-50/70 hover:border-blue-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceChange(service.id)}
                          className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-lg font-semibold text-slate-900">
                              {service.name}
                            </span>
                            <span className="text-sm font-semibold text-blue-700">
                              {service.benefit}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (fieldErrors.fullName) setFieldErrors((prev) => ({ ...prev, fullName: undefined }));
                      }}
                      placeholder="Jane Smith"
                      className={`${inputClassName} ${fieldErrors.fullName ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
                    />
                    {fieldErrors.fullName && (
                      <p className={errorClassName}>{fieldErrors.fullName}</p>
                    )}
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="jane@business.com"
                      className={`${inputClassName} ${fieldErrors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
                    />
                    {fieldErrors.email && (
                      <p className={errorClassName}>{fieldErrors.email}</p>
                    )}
                  </label>
                </div>

                <label className="block text-sm font-medium text-slate-700">
                  Business Name <span className="text-red-500">*</span>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                      if (fieldErrors.businessName) setFieldErrors((prev) => ({ ...prev, businessName: undefined }));
                    }}
                    placeholder="Island Ventures"
                    className={`${inputClassName} ${fieldErrors.businessName ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
                  />
                  {fieldErrors.businessName && (
                    <p className={errorClassName}>{fieldErrors.businessName}</p>
                  )}
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Project Details
                  <textarea
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder="Tell us what you need, your timeline, and any goals for this project."
                    rows={5}
                    className={`${inputClassName} resize-none`}
                  />
                </label>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-semibold text-slate-700">
                      Estimated Total
                    </span>
                    <span className="text-2xl font-semibold text-blue-700">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                {status === "error" && (
                  <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isDisabled}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-white transition ${
                    isDisabled
                      ? "cursor-not-allowed bg-slate-300"
                      : "bg-slate-950 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.7)] hover:-translate-y-0.5 hover:bg-blue-700"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : selectedServices.length === 0 ? (
                    "Select a Service to Continue"
                  ) : (
                    "Get My Estimate"
                  )}
                </button>

                <p className="text-center text-sm leading-6 text-slate-500">
                  This is a live estimate for planning purposes only. Final quotes
                  can be adjusted based on project scope.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
