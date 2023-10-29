// async function getAuthSession() {
//   if (localStorage.getItem("accessToken")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const ProtectedSSRoute = ({ children }) => {
//   // console.log("Here isnide Proyec");
//   return <>{children}</>;
// };

// export async function getServerSideProps() {
//   const authSession = await getAuthSession();
//   console.log("authSession", authSession);
//   if (!authSession) {
//     return {
//       redirect: {
//         destination: "/auth/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       authenticated: true,
//     },
//   };
// }
// export default ProtectedSSRoute;
