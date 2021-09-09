import React from "react";
import CandidateCard from "Pages/Recruiter/ATS/CandidateCard";

export const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: (
        <CandidateCard
          name="Yudhbir Singh"
          phone="+91 12345 67890"
          email="yudhbirsingh@mail.com"
        />
      ),
    },
    "task-2": {
      id: "task-2",
      content: (
        <CandidateCard
          name="Mercedes Martin"
          phone="+91 12345 67892"
          email="mercedesmartin@mail.com"
        />
      ),
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      color: "#D2444D",
      title: "Applied",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      color: "#88C81F",
      title: "Phone Interview",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      color: "#398AE7",
      title: "On-Site Interview",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      color: "#A35910",
      title: "Evaluation",
      taskIds: [],
    },
    "column-5": {
      id: "column-5",
      color: "#95E77D",
      title: "Offer",
      taskIds: [],
    },
    "column-6": {
      id: "column-6",
      color: "#DB780A",
      title: "Hired",
      taskIds: [],
    },
  },
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
  ],
};
