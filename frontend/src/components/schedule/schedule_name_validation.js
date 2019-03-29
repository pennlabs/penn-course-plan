const illegalCharacters = /[^a-zA-Z\d\s-_]/;

export const validateScheduleName = (scheduleName, existingScheduleNames) => {
    return scheduleName === "" ? "Name cannot be empty" :
        scheduleName.match(illegalCharacters) ?
            "Name can only contain spaces, underscores, dashes, letters, and numbers" :
            scheduleName.length > 25 ? "Name is too long" :
                existingScheduleNames.indexOf(scheduleName) !== -1
                    ? "Schedule with this name already exists" : ""
};