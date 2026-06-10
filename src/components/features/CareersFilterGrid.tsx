"use client";
 
import React, { useState } from "react";
import { Search, Clock, ArrowRight, X, Upload, CheckCircle, Send } from "lucide-react";
import { jobOpenings, departmentsList } from "@/data/careers";
import Button from "@/components/ui/Button";
 
export default function CareersFilterGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("All Departments");
  
  // Modal Apply States
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [appliedName, setAppliedName] = useState("");
  const [appliedEmail, setAppliedEmail] = useState("");
  const [appliedPortfolio, setAppliedPortfolio] = useState("");
  const [appliedResume, setAppliedResume] = useState<File | null>(null);
  const [appliedCover, setAppliedCover] = useState("");
  const [appSubmitted, setAppSubmitted] = useState(false);
 
  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", appliedName);
    data.append("email", appliedEmail);
    data.append("portfolio", appliedPortfolio);
    data.append("cover", appliedCover);
    if (appliedResume) {
      data.append("resume", appliedResume);
    }
 
    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      console.log("Job Application API Response:", result);
      setAppSubmitted(true);
    } catch (error) {
      console.error("Job Application API Error:", error);
      setAppSubmitted(true);
    }
  };
 
  const handleClose = () => {
    setSelectedJob(null);
    setAppliedName("");
    setAppliedEmail("");
    setAppliedPortfolio("");
    setAppliedResume(null);
    setAppliedCover("");
    setAppSubmitted(false);
  };
 
  // Filtering logic
  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      activeDepartment === "All Departments" ||
      job.department.toLowerCase() === activeDepartment.toLowerCase();

    return matchesSearch && matchesDepartment;
  });

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface" id="jobs">
      <div className="max-w-[1280px] mx-auto space-y-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-outline/30 pb-sm">
          <div>
            <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">
              Join Our Journey
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary mt-1">
              Open Positions
            </h2>
          </div>
          <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/85 max-w-md">
            Explore our open roles. If you don't find a direct match, submit your profile to our talent pool.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md items-center bg-surface-container-low p-md rounded-3xl border border-outline-variant/30 neumorphic-raised">
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-outline-variant rounded-full text-label-md focus:outline-none focus:border-primary dark:bg-primary-container dark:text-on-primary dark:border-primary-fixed-dim/20"
            />
          </div>

          {/* Department Filter */}
          <div className="relative">
            <select
              value={activeDepartment}
              onChange={(e) => setActiveDepartment(e.target.value)}
              className="w-full px-4 py-2.5 bg-white dark:bg-primary-container border border-outline-variant rounded-full text-label-md focus:outline-none focus:border-primary cursor-pointer text-on-surface dark:text-on-primary dark:border-primary-fixed-dim/20 appearance-none"
            >
              {departmentsList.map((dept, idx) => (
                <option key={idx} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-outline-variant"></div>
          </div>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-xl bg-surface-container-lowest rounded-3xl border border-outline-variant/20 p-lg neumorphic-raised">
            <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary mb-2">
              No Openings Found
            </h3>
            <p className="text-on-surface-variant dark:text-on-primary-container/85 max-w-md mx-auto text-body-md">
              We couldn't find any positions matching your filters. Try adjusting your search query or department filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col justify-between p-lg bg-surface neumorphic-raised rounded-3xl min-h-[280px]"
              >
                <div className="space-y-md">
                  <div className="flex justify-between items-start">
                    <span className="bg-secondary/10 text-secondary dark:bg-secondary-fixed/20 dark:text-secondary-fixed text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="text-label-sm text-outline flex items-center gap-xs font-bold uppercase tracking-widest">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary leading-snug">
                    {job.title}
                  </h3>

                </div>

                <div className="pt-lg border-t border-outline/30 mt-auto flex items-center justify-between">
                  <Button
                    variant="secondary"
                    onClick={() => setSelectedJob(job)}
                    className="w-full h-10 flex items-center justify-center gap-2 group/btn rounded-full"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
 
      {selectedJob && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-md">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl w-full max-w-lg p-lg relative shadow-xl overflow-y-auto max-h-[90vh] space-y-md">
            <button 
              onClick={handleClose} 
              className="absolute right-4 top-4 text-on-surface-variant hover:text-primary dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
 
            {appSubmitted ? (
              <div className="text-center py-lg space-y-md">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                  Application Submitted!
                </h3>
                <p className="text-body-md text-on-surface-variant dark:text-on-primary-container/80 max-w-xs mx-auto">
                  Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our recruitment team will review your application and reach out to you soon.
                </p>
                <Button variant="secondary" onClick={handleClose} className="rounded-full">
                  Close Window
                </Button>
              </div>
            ) : (
              <div className="space-y-md">
                <div>
                  <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Apply for Position
                  </span>
                  <h3 className="text-headline-sm font-headline-md text-primary dark:text-on-primary leading-tight mt-1">
                    {selectedJob.title}
                  </h3>
                  <p className="text-label-sm text-on-surface-variant dark:text-zinc-400 mt-xs">
                    {selectedJob.department}
                  </p>
                </div>
 
                <form onSubmit={handleApplySubmit} className="space-y-sm">
                  <div className="space-y-xs">
                    <label className="block text-label-sm font-bold text-zinc-700 dark:text-zinc-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={appliedName}
                      onChange={(e) => setAppliedName(e.target.value)}
                      className="w-full px-md h-10 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-secondary outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-label-md"
                      placeholder="e.g. Vikram Malhotra"
                    />
                  </div>
 
                  <div className="space-y-xs">
                    <label className="block text-label-sm font-bold text-zinc-700 dark:text-zinc-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={appliedEmail}
                      onChange={(e) => setAppliedEmail(e.target.value)}
                      className="w-full px-md h-10 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-secondary outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-label-md"
                      placeholder="e.g. name@example.com"
                    />
                  </div>
 
                  <div className="space-y-xs">
                    <label className="block text-label-sm font-bold text-zinc-700 dark:text-zinc-300">
                      LinkedIn / Portfolio URL
                    </label>
                    <input
                      type="url"
                      value={appliedPortfolio}
                      onChange={(e) => setAppliedPortfolio(e.target.value)}
                      className="w-full px-md h-10 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-secondary outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-label-md"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
 
                  <div className="space-y-xs">
                    <label className="block text-label-sm font-bold text-zinc-700 dark:text-zinc-300">
                      Resume / CV File
                    </label>
                    <div className="border border-dashed border-zinc-300 dark:border-zinc-700 hover:border-secondary transition-colors rounded-xl p-md text-center cursor-pointer relative bg-zinc-50 dark:bg-zinc-800/50">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setAppliedResume(e.target.files[0]);
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center gap-xs text-zinc-500 dark:text-zinc-400">
                        <Upload className="w-6 h-6 text-secondary" />
                        <p className="text-label-sm font-bold">
                          {appliedResume ? appliedResume.name : "Upload Resume (PDF, DOCX)"}
                        </p>
                        {!appliedResume && (
                          <p className="text-[10px] opacity-70">
                            Drag & drop or click to choose file
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
 
                  <div className="space-y-xs">
                    <label className="block text-label-sm font-bold text-zinc-700 dark:text-zinc-300">
                      Cover Note
                    </label>
                    <textarea
                      rows={3}
                      value={appliedCover}
                      onChange={(e) => setAppliedCover(e.target.value)}
                      className="w-full p-sm rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-secondary outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-label-md resize-none"
                      placeholder="Briefly tell us why you are a great fit..."
                    />
                  </div>
 
                  <div className="pt-xs">
                    <Button type="submit" variant="secondary" className="w-full h-10 rounded-full flex items-center justify-center gap-xs">
                      Submit Application <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}