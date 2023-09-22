const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("applied-job");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedApplications = getStoredJobApplication();
  const exists = storedApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedApplications.push(id);
    localStorage.setItem("applied-job", JSON.stringify(storedApplications));
  }
};

export { getStoredJobApplication, saveJobApplication };
