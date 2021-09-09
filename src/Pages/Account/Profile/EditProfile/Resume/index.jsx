import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useStoreActions } from "easy-peasy";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Profile from "../../../../../static/assets/icons/Profile/Profile.png";
import CardFooter from "../CardFooter";
import api from "Http/httpService";
import { useHistory } from "react-router";
import { BACKEND_URL  } from "../../../../../constants";
import "./style.scss"

// function base64ToBlob(base64, mime) {
//   mime = mime || "";
//   var sliceSize = 1024;
//   var byteChars = window.atob(base64);
//   var byteArrays = [];

//   for (
//     var offset = 0, len = byteChars.length;
//     offset < len;
//     offset += sliceSize
//   ) {
//     var slice = byteChars.slice(offset, offset + sliceSize);

//     var byteNumbers = new Array(slice.length);
//     for (var i = 0; i < slice.length; i++) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }

//     var byteArray = new Uint8Array(byteNumbers);

//     byteArrays.push(byteArray);
//   }

//   return new Blob(byteArrays, { type: mime });
// }

function dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  let croppedImage = new File([u8arr], filename, { type: mime });
  return croppedImage;
}

const pixelRatio = window.devicePixelRatio || 1;
function getResizedCanvas(canvas, newWidth, newHeight) {
  const tmpCanvas = document.createElement("canvas");
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  const ctx = tmpCanvas.getContext("2d");
  ctx.drawImage(
    canvas,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    newWidth,
    newHeight
  );

  return tmpCanvas;
}

// function generateDownload(previewCanvas, crop) {
//   if (!crop || !previewCanvas) {
//     return;
//   }

//   const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);

//   canvas.toBlob(
//     (blob) => {
//       const previewUrl = window.URL.createObjectURL(blob);

//       const anchor = document.createElement("a");
//       anchor.download = "cropPreview.png";
//       anchor.href = URL.createObjectURL(blob);
//       anchor.click();

//       window.URL.revokeObjectURL(previewUrl);
//     },
//     "image/png",
//     1
//   );
// }

function getImageUrl(previewCanvas, crop, fileName) {
  const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);
  // const base64 = canvas.toDataURL("image/jpg");
  // const base64Cleaned = base64.replace(/^data:image\/(png|jpeg);base64,/, "");
  // return base64ToBlob(base64Cleaned, 'image/png');
  return canvas.toDataURL("image/jpg");
  // return new Promise((resolve, reject) => {
  //   canvas.toBlob(blob => {
  //     blob.name = fileName;
  //     resolve(blob);
  //   }, 'image/png', 1);
  // }, (e) => console.log(e));
}

function Resume() {
  const { setResume } = useStoreActions((actions) => ({
    setResume: actions.setResume,
  }));
  // const resume = useStoreState(state => state.profile.resume);
  const [isDone, setDone] = useState(false);

  const [resumeState, setResumeState] = useState({
    image: null,
    resumeFile: null,
  });

  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imgName, setImgName] = useState("No File Choosen");
  const [isEmpty, setEmpty] = useState(false);

  const [croppedImg, setCroppedImg] = useState(null);

  const [crop, setCrop] = useState({
    unit: "px",
    width: 300,
    aspect: 1 / 1,
  });

  const onSelectImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {

      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setResumeState({ ...resumeState, image: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
      setImgName(e.target.files[0].name);
      // setResumeState({ ...resumeState, image: e.target.files[0] })
    }
    setDone(isDone ? !isDone : isDone);
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeState({
        ...resumeState,
        resumeFile: e.target.files[0],
      });
    }
  };
  const history = useHistory();
  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    // let isMounted = true;
    if (!croppedImg || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    // if (isMounted){
    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = croppedImg;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    // }
    // return () => { isMounted = false }
    // console.log(finalState);
  }, [croppedImg]);
  var formdata = new FormData();
  if (resumeState.image && resumeState.resumeFile) {
    const newFile = dataURLtoFile(resumeState.image, `${imgName}.png`);

    formdata.append("photo", newFile, `${imgName}.png`);
    formdata.append("resume", resumeState.resumeFile);
  }

  // console.log(resumeState.image)
  const saveNHandler = async () => {
    try {
      if (!resumeState.image || !resumeState.resumeFile) return setEmpty(true);

      const endpoints = [BACKEND_URL +"/api/v1/upload/profile-photo", BACKEND_URL + "/api/v1/upload/resume"];
      const requests = endpoints.map((endpoint) =>
        api.post(endpoint, formdata)
      );
      const responses = await Promise.all(requests);

      // setFinalState((prevState) => ({
      //   ...prevState,
      //   resume: responses[0].data.location,
      //   profilePhoto: responses[1].data.location,
      // }));
      //   if(resumeState.image !== null && resumeState.resumeFile !== null){
      //   // setResume(resumeState);
      //   Promise.all(['/upload/profile-photo','/upload/resume']
      //   .map(endpoint => api.post(endpoint, formdata)))
      //   .then(resp => {
      //     if(resp){
      //       setFinalState({
      //     profilePhoto: resp[0].data.location,
      //     resume: resp[1].data.location
      //   })}
      // });
      setResume({
        profilePhoto: responses[0].data.location,
        resume: responses[1].data.location,
      });
      
      history.push("/candidate/create/personal-info");
    } catch (e) {
      setEmpty(true);
      console.error(e);
    }
  };

  // // console.log(finalState)
  // useEffect(() =>
  // console.log(userDetails, finalState)
  // ,[userDetails, finalState]);
console.log(imgName)
  return (
    <Box p="10">
      <Text fontSize="2xl">Upload</Text>
      <Divider />
      <SimpleGrid
        alignItems="center"
        minChildWidth="120px"
        spacing="1em"
        p="10"
      >
        {resumeState.image !== null ? (
          <Image src={resumeState.image} size="200px" rounded="full" />
        ) : (
          <Box
            backgroundColor="#efefef"
            maxWidth="100px"
            padding="1.25em"
            borderRadius="50%"
          >
            <Image src={Profile} />
          </Box>
        )}
           <Flex direction="column">
           <Text my={2} color="grey" fontSize="md">
     Attach profile Image (File Format PNG,JPEG)
          </Text>
        <input required type="file" accept="image/*" onChange={onSelectImage}  style={{color:"transparent"}}/>
        <Text my={2} color="grey" fontSize="md">
        {imgName}
          </Text>
          </Flex>

      </SimpleGrid>

      {resumeState.image && (
        <Box
          rounded="md"
          p="5"
          backgroundColor="#eeeeee"
          display={isDone ? "none" : ""}
        >
          <Flex justify="space-between" align="center">
            <Text>Preview Tab</Text>
            <Button
              variantColor="green"
              onClick={async () => {
                setDone(!isDone);
                let img = await getImageUrl(
                  previewCanvasRef.current,
                  croppedImg,
                  imgName
                );
                setResumeState({ ...resumeState, image: img });
                // console.log(img);
              }}
            >
              Done
            </Button>
          </Flex>
          <Divider />
          <canvas
            ref={previewCanvasRef}
            style={{
              width: Math.round(croppedImg?.width ?? 0),
              height: Math.round(croppedImg?.height ?? 0),
            }}
          />
          <Divider />
          <ReactCrop
            locked
            src={resumeState.image}
            crop={crop}
            onImageLoaded={onLoad}
            onComplete={(c) => setCroppedImg(c)}
            onChange={(c) => setCrop(c)}
          />
        </Box>
      )}
      <Divider />
      <SimpleGrid minChildWidth="120px" spacing="1em" p="10">
        <Flex direction="column">
          <Text fontSize="lg" style={{color:"gray"}}>Attach Resume</Text>
          <Text color="grey" fontSize="md">
            ( File Format PDF, DOC, DOCS )
          </Text>
        </Flex>
        <Flex direction="column">
          <input type="file" required onChange={onSelectFile} style={{color:"gray"}}/>
          <Text color="grey" fontSize="md">
            Upload New File to Update Existing Resume
          </Text>
        </Flex>
      </SimpleGrid>
      {isEmpty && (
        <Alert status="error">
          <AlertIcon />
          Upload the Files before clicking on Save & Next
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setEmpty(false)}
          />
        </Alert>
      )}
      {/* <Button onClick={() => generateDownload(previewCanvasRef.current, croppedImg)}>
                Downlo>ad
            </Button */}
      {/* <Button onClick={saveNHandler}>Save</Button> */}
      <CardFooter snHandler={saveNHandler} />
    </Box>
  );
}

export default Resume;
