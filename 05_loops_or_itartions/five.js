//  forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.

// FOR EACH 

const coding = ['java', 'js', 'cpp', 'ruby', 'python']

// Normal functon

coding.forEach(function (item) {
    // console.log(item)
})


// Arrow function

// coding.forEach((val) => {
//     console.log(val)
// })

function printMe(item) {
    // console.log(item)
}

coding.forEach(printMe)

// another example foreach

coding.forEach((value, index, array1) => {
    // console.log(value, index, array1)
})



// db another example

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageName)
})






// Real world database example pratice

const company1 = [
    {
        "company": {
            "name": "Tech Innovators Inc.",
            "address": {
                "street": "1234 Innovation Blvd",
                "city": "Techville",
                "state": "TX",
                "zip": "75001"
            },
            "employees": [
                {
                    "id": 1,
                    "name": "John Doe",
                    "position": "Software Engineer",
                    "department": "Engineering",
                    "salary": 120000,
                    "contact": {
                        "email": "johndoe@techinnovators.com",
                        "phone": "555-1234"
                    },
                    "skills": ["JavaScript", "Node.js", "React", "MongoDB"]
                },
                {
                    "id": 2,
                    "name": "Jane Smith",
                    "position": "Product Manager",
                    "department": "Product",
                    "salary": 110000,
                    "contact": {
                        "email": "janesmith@techinnovators.com",
                        "phone": "555-5678"
                    },
                    "skills": ["Product Strategy", "Agile", "User Research"]
                },
                {
                    "id": 3,
                    "name": "Alice Johnson",
                    "position": "UX Designer",
                    "department": "Design",
                    "salary": 95000,
                    "contact": {
                        "email": "alicejohnson@techinnovators.com",
                        "phone": "555-8765"
                    },
                    "skills": ["UX Design", "Wireframing", "Prototyping", "Sketch"]
                },
                {
                    "id": 4,
                    "name": "Robert Brown",
                    "position": "DevOps Engineer",
                    "department": "Engineering",
                    "salary": 115000,
                    "contact": {
                        "email": "robertbrown@techinnovators.com",
                        "phone": "555-4321"
                    },
                    "skills": ["Docker", "Kubernetes", "AWS", "CI/CD"]
                }
            ],
            "projects": [
                {
                    "id": 1,
                    "name": "TechApp",
                    "description": "A web application for managing tech projects",
                    "deadline": "2025-12-31",
                    "team": [
                        {
                            "employeeId": 1,
                            "role": "Lead Developer"
                        },
                        {
                            "employeeId": 2,
                            "role": "Product Manager"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "InnoHub",
                    "description": "A platform for tech innovators to share ideas",
                    "deadline": "2025-06-30",
                    "team": [
                        {
                            "employeeId": 3,
                            "role": "UX Designer"
                        },
                        {
                            "employeeId": 4,
                            "role": "DevOps Engineer"
                        }
                    ]
                }
            ]
        }
    }

]

company1.forEach((item) => {
    console.log(item.company.projects.forEach((pro)=>{
        console.log(pro.name)
    }))
})





