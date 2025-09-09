// Challenge 1: Student Grade Generator

// Function to calculate grade based on marks
function calculateGrade(marks) {
  if (marks > 100 || marks < 0) {
    return "Invalid input. Marks must be between 0 and 100.";
  } else if (marks > 79) {
    return "Grade: A";
  } else if (marks >= 60) {
    return "Grade: B";
  } else if (marks >= 49) {
    return "Grade: C";
  } else if (marks >= 40) {
    return "Grade: D";
  } else {
    return "Grade: E";
  }
}

console.log(calculateGrade(85));
