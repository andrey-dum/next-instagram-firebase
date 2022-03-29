

export const generateUsername = (fullname: string) => 
    fullname
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      