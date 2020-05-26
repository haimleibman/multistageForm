const inputs = {
    personal: [
        {
            "name": "first name",
            "required": true,
            "error": "This field is required"
        },
        {
            "name": "last name",
            "required": true,
            "error": "This field is required"
        },
        {
            "name": "title"
        }
    ],
    address: [
        {
            "name": "country",
            "required": true,
            "error": "This field is required"
        },
        {
            "name": "city"
        },
        {
            "name": "street"
        }
    ],
    contactability: [
        {
            "name": "email",
            "required": true,
            "pattern": "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$",
            "error": "This field is required and mast be filled with valid email address"
        },
        {
            "name": "phone",
            "pattern": "^(?:(?:\\+?1\\s*(?:[.-]\\s*)?)?(?:(\\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\\s*(?:[.-]\\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\\s*(?:[.-]\\s*)?([0-9]{4})\\s*(?:\\s*(?:#|x\\.?|ext\\.?|extension)\\s*(\\d+)\\s*)?$",
            "error": "Make shure that the phone number is valid!"
        },
        {
            "name": "optin"
        }
    ]
}

export default inputs;