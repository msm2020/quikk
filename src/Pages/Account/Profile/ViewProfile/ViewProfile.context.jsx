import React, { createContext } from "react";
import useCandidateDetails from "hooks/useCandidateDetails";
import LoadingShell from "Components/Core/LoadingShell/LoadingShell";
import SEO from "Components/SEO";
import { descending } from "utils/sort";

export const ViewProfileContext = createContext({});
export const ViewProfileConstantsCtx = createContext({});

// const updateHeadline = (data) => {
//   const userData  = {...user, resume_headline: value};
//   mutate('/update/candidate',userData, false);
//   api.post('/update/candidate', userData).then( resp => {
//     if(resp.status === 200){
//       closeModal();
//       toast({
//         title: "Headline Updated",
//         status: "success",
//         duration: 9000,
//         isClosable: true
//       });
//       mutate('/fetch/candidate');

//     } else {
//       toast({
//         title: "Headline Update Failed",
//         status: "error",
//         duration: 9000,
//         isClosable: true
//       });
//     }
//   });
// }

export default function ViewProfileContextWrap({ children }) {
  const { data, error, loading } = useCandidateDetails();

  if (error || loading) {
    return <LoadingShell />;
  }

  const constants = {
    fullName: `${data.first_name} ${data.last_name}`,
    designation: data.professional_details.sort((curr, next) => {
      return descending(curr, next, "start_date");
    })[0]?.designation,
  };

  return (
    <ViewProfileContext.Provider value={data}>
      <ViewProfileConstantsCtx.Provider value={constants}>
        <SEO
          title={constants?.fullName}
          description={constants?.designation}
          image={data?.profile_photo}
        />
        {children}
      </ViewProfileConstantsCtx.Provider>
    </ViewProfileContext.Provider>
  );
}
