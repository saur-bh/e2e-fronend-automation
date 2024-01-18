**Defect found while automation**

# No backend check for first name or last name more than 50 character 
When user try to enter first name or last name more than 50 char, gets error message in front-end i.e. ‘Der Vorname darf maximal 50 Zeichen lang sein’ 
![More than 50 char](/resource/50ch.png)
Similar action when perform in the backend – record gets created 

i.e. 
query :
<code> mutation CreateEmployerInLandingPage(
    $companyName: String!, $email: String!, $jobTitle:String, $name:String!, $phone:String!, $surname:String!) {
       createEmployerInLandingPage(
       companyName: $companyName
       email: $email
       jobTitle: $jobTitle
       name: $name
       phone: $phone
       surname: $surname
      ){
        id
        __typename
      }
Variable:
{ 
  "companyName": "CompanyANem",
  "email": "someEmail@emc.com",
  "jobTitle": "Hello",
  "name": "testfirstanmetestfirstanmetestfirstanmetestfirstanmetestfirstanmetestfirstanmetestfirstanmetestfirstanme",
  "phone": "+919739992722",
    "surname": "verma"
  }
</code>

Response: 
<code>{
  "data": {
  "id": "849656da-c25f-4a49-8b47-e0f963de8bd6",
  "\_\_typename": "Employer"
  }
  } </code>
# Backend vs Front end error 
When user input telephone number which is not in good format ; on front end gets error ‘Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.’
![Frontend Error](/resource/error.png)
But on backend error is more accurate
![Backend Error](/resource/backend.png)

