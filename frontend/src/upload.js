import React ,{ useState } from "react";

const Upload = () => {
  const [img, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    var fileUpload = document.getElementById("fileinput");


    //Check whether the file is valid Image.
    var regex = new RegExp("([a-zA-Z0-9s_\\.-:])+(.jpg|.jpeg)$");
    if (regex.test(fileUpload.value.toLowerCase())) {
      //Check whether HTML5 is supported.
      if (typeof fileUpload.files != "undefined") {
        //Initiate the FileReader object.
        var reader = new FileReader();
        //Read the contents of Image File.
        reader.readAsDataURL(fileUpload.files[0]);
        reader.onload = function (e) {
          //Initiate the JavaScript Image object.
          var image = new Image();

          //Set the Base64 string return from FileReader as source.
          image.src = e.target.result;

          //Validate the File Height and Width.
          image.onload = function () {
            const fi = document.getElementById("fileinput");
            // Check if any file is selected.

            const fsize = fi.files.size;
            const file = Math.round(fsize / 1024);
            // The size of the file.
            if (file >= 51200) {
              alert("File too Big, please select a file less than 50KB");
            }

            var height = this.height;
            var width = this.width;
            if (height > 200 || width > 200) {
              alert("รูปต้องมีขนาด 200x200 px.");
              return false;
            }
            alert("Uploaded image has valid Height, Width and Size.");
            const formUpload = new FormData();
            formUpload.append("image", img);
            console.log(fi.files)
            const option = {
              method: "POST",
              body: formUpload,
            };
            fetch("http://localhost:8080/upload/", option).then(
              () => (window.location.href = "/success")
            );
            return true;
          };
        };
      } else {
        alert("This browser does not support HTML5.");
        return false;
      }
    } else {
      alert("Please select a valid Image file type.");
      return false;
    }
  };

  return (
    <div style={{ marginLeft: "20%", marginTop: "10%" }}>
      <input type="file" id="fileinput" onChange={handleImage} />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
};

export default Upload;
