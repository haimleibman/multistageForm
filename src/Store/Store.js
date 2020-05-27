import { personal, address, contactability } from "../sharedModels/fields.model";
import { atom, selector } from "recoil";
import { sections } from "../sharedModels/sections.model";
import inputs from "../InputSection/inputs";

export const Store = {
    [personal.firstName]: atom({
        key: personal.firstName,
        default: ''
    }),

    [personal.lastName]: atom({
        key: personal.lastName,
        default: ''
    }),

    [personal.title]: atom({
        key: personal.title,
        default: ''
    }),

    [address.country]: atom({
        key: address.country,
        default: ''
    }),

    [address.city]: atom({
        key: address.city,
        default: ''
    }),

    [address.street]: atom({
        key: address.street,
        default: ''
    }),

    [contactability.email]: atom({
        key: contactability.email,
        default: ''
    }),

    [contactability.phone]: atom({
        key: contactability.phone,
        default: ''
    }),

    [contactability.optin]: atom({
        key: contactability.optin,
        default: ''
    }),

    [sections.personal]: selector({
        key: sections.personal,
        get: ({get}) => {
            const firstName = get(Store[personal.firstName]);
            const lastName = get(Store[personal.lastName]);

            return firstName && lastName;
        }
    }),

    [sections.address]: selector({
        key: sections.address,
        get: ({get}) => {
            const country = get(Store[address.country]);

            return !!country;
        }
    }),

    [sections.contactability]: selector({
        key: sections.contactability,
        get: ({get}) => {
            const email = get(Store[contactability.email]);
            const phone = get(Store[contactability.phone]);

            const getPattern = fieldName => inputs[sections.contactability].filter(_ => _.name === fieldName)[0].pattern;

            const isEmailValid = new RegExp(getPattern(contactability.email)).test(email);
            const isPhoneValid = new RegExp(getPattern(contactability.phone)).test(phone);

            return email && isEmailValid && (!phone || isPhoneValid);
        }
    })
}