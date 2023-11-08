<<<<<< This app is all about to mamange the book system , It is basic CRUD operation >>>>>>
 There are 4 apis and for the validation i have used JOI package , so it will throw and error if user will any wrong key in payload or Datatype is different

1 => BOOK REGISTRATION ( Add the book in database)
    VALIDATION =  title & author field is required

    ** CURL ** 
    curl --location 'localhost:3000/bookregistration' \
    --header 'Content-Type: application/json' \
    --data '{
        "title":"book-3",
        "summary":"summary-3",
        "author":"author-3"
    }'

2 => UPDATE BOOK ( Update the book in database)
    VALIDATION =>  id field is required

    ** CURL ** 
    curl --location 'localhost:3000/updatebook' \
    --header 'Content-Type: application/json' \
    --data '{   
        "id":"906e0c69-8c52-4000-8775-bd8d7cc20cd6",
        "title":"update_book-1",
        "summary":"update_summary-1",
        "author":"update_author-1"
    }'

3 => READ BOOK/ ALL BOOKS (Get a single book or get all the books from database)
    VALIDATION =>  id field is optional

    ** CURL ** 
    curl --location 'localhost:3000/getbooks?id=906e0c69-8c52-4000-8775-bd8d7cc20cd6'

4 => DELETE BOOK (Delete a single book from database)
    VALIDATION =>  id field is optional

    ** CURL ** 
    curl --location --request DELETE 'localhost:3000/deletebook' \
    --header 'Content-Type: application/json' \
    --data '{   
        "id":"59e812a0-2592-42c0-9db3-da0bcaf9d207"
    }'