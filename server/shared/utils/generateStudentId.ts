function generateStudentID(): string {
    // Generate a random 7-digit number
    const randomDigits = Math.floor(1000000 + Math.random() * 9000000);
    
    // Return the student ID in the format 'STU-[7DIGIT]'
    return `STU-${randomDigits}`;
}

export default generateStudentID