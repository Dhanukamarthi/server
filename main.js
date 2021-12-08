const fs = require('fs')
const http = require('http')
const url = require('url')
    const replaceTemplate = (template, studentDetails) => {
        let output = template.replace(/{%NAME%}/g, studentDetails.name).replace(/{%AGE%}/g, studentDetails.age).replace(/{%GENDER%}/g, studentDetails.gender)
        // let output = template.replace(/{%AGE%}/g, studentDetails.age)
        // let output = template.replace(/{%GENDER%}/g, studentDetails.gender)
        return output
    }
    const studentPageS