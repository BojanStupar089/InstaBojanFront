export const readFile = (input) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(input.files[0])
      reader.onload = () => {
        try {
          const response = reader.result
          resolve(response);
        } catch (err) {
          reject(err);
        }
       };
      })
}
