// function getContacts() {
//   return fetch('/contacts')
//     .then(handleErrors)
//     .then((res) => res.json());
// }

async function GetContacts() {
  const URL = "https://reqres.in/api/users";
  const response = await fetch(URL, { method: "GET" });
  return await Promise.all([response, response.json()]);
}

export function fetchContacts() {
  return (dispatch) => {
    dispatch(fetchContactsBegin());

    return (
      GetContacts()
        .then(([response, json]) => {
          if (response.status === 200) {
            dispatch(fetchContactsSuccess(json.data));
            // console.log('json', json);
          }
        })
        // return json.Contacts;
        .catch((error) => dispatch(fetchContactsFailure(error)))
    );
  };
}

// Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const FETCH_CONTACTS_BEGIN = "FETCH_CONTACTS_BEGIN";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_FAILURE = "FETCH_CONTACTS_FAILURE";

export const fetchContactsBegin = () => ({
  type: FETCH_CONTACTS_BEGIN,
});

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: { contacts },
});

export const fetchContactsFailure = (error) => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: { error },
});

// const ContactAction = () => {
//   const [contactInfo, setContactInfo] = useState([]);
//   useEffect(() => {
//     const url = "https://reqres.in/api/users";
//     const fetchData = async () => {
//       try{
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log('data of json : ', response.json());
//         setContactInfo(json.data)
//       } catch (error) {
//         console.log("Error", error);
//       }

//       fetchData();
//     }
//   }, []);

//   return(
//     <div>
//       <p>
//         {contactInfo}
//       </p>
//     </div>
//   )
// };

// export default ContactAction;
