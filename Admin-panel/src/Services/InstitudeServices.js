import { apiFetch } from "./api";

export const getCourse = async () => {
  try {
    const courseFecth = await apiFetch(`http://localhost:3000/api/course/`);
    const data = await courseFecth.json();
    if (!courseFecth.ok) {
      throw new Error({ message: data.message || "course not founded" });
    }
    return data.data || [];
  } catch (error) {
    if (err.message === "Unauthorized") {
      throw error;
    }
    throw error;
  }
};

export const stdAdmSubmitting = async (stdAdm) => {
  try {
    const response = await apiFetch(
      `http://localhost:3000/api/institude/admission`,
      {
        method: "POST",
        body: JSON.stringify(stdAdm),
      },
    );
    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Student admission failed",
      };
    }
    return {
      success: true,
      message: result.message,
      data: result.data,
    };
  } catch (error) {
    if (err.message === "Unauthorized") {
      throw error;
    }
    return {
      success: false,
      message: "Network error",
    };
  }
};

export const institudeAnnouncement = async (payload) => {
  try {
    const response = await apiFetch(`http://localhost:3000/api/announcement/`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = response.json();
    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Announcement upload failed",
      };
    }
    return {
      success: true,
      message: data.message || "Announcement uploaded",
      data,
    };
  } catch (error) {
    if ((error.message = "Unauthorized")) {
      throw error;
    }
    return {
      success: false,
      message: error.message || "Network error",
    };
  }
};
