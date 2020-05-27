const inputs = {
    Personal: [
        {
            "name": "First name",
            "required": true,
            "error": "This field is required"
        },
        {
            "name": "Last name",
            "required": true,
            "error": "This field is required"
        },
        {
            "name": "Title"
        }
    ],
    Address: [
        {
            "name": "Country",
            "required": true,
            "error": "This field is required"
        },
        {
            "name": "City"
        },
        {
            "name": "Street"
        }
    ],
    Contactability: [
        {
            "name": "Email",
            "required": true,
            "pattern": "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$",
            "error": "This field is required and mast be filled with valid email address"
        },
        {
            "name": "Phone",
            "pattern": "\\(?\\+[0-9]{1,3}\\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?",
            "error": "Make shure that the phone number is valid!"
        },
        {
            "name": "Optin",
            "type": "checkbox",
            "text": "I agree to use my personal data to contact me"
        }
    ]
}

export default inputs;