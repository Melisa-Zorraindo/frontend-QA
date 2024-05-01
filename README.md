# Frontend Interview Questions API

A set of multiple-choice questions in the field of Frontend Development. Each question includes three possible answers, with two being incorrect and one correct. The response object contains the correct answer, the language (HTML, CSS, or JavaScript), and an explanatory answer that provides further information.

The API is hosted on [RAPIDAPI](https://rapidapi.com/Melisa-Zorraindo/api/frontend-qa) and offers a free tier.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Requests](#requests)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Installation

1. Clone the repository

```bash
git clone https://github.com/Melisa-Zorraindo/frontend-QA.git
```

2. Install the dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run start:dev
```

4. Set up the database

```bash
xata schema dump -f schema.json
```

## Usage

This API can be utilised to create quizzes or interactive learning experiences. It can also serve as a resource for programming tutorials or be used to build assessment tools for evaluating knowledge and understanding of web development concepts.

## Requests

GET

Returns all available questions. The response object looks like this:

```
{
  "data": [
    {
      "choices": [
        "HTML tags are used to create animations on a web page.",
        "HTML tags are used to define the structure and content of a web page.",
        "HTML tags are used to style elements on a web page."
      ],
      "correct_choice": "HTML tags are used to define the structure and content of a web page.",
      "explanation": "HTML tags are essential elements in creating the structure of a web page. They define the various components such as headings, paragraphs, links, images, and more. Each HTML tag serves a specific purpose, allowing web browsers to interpret and display content appropriately.",
      "id": "rec_cl48cb8gnilr5i2f406g",
      "language": "html",
      "prompt": "What are HTML tags?",
      "xata": {
        "createdAt": "2023-11-06T15:57:27.689Z",
        "updatedAt": "2023-11-06T15:57:27.689Z",
        "version": 0
      }
    }
...
]
```

## Contributing

Contributors are welcome!

If you encounter any issues, notice any mistakes in the questions, or would like to make a request, please [open an issue](https://github.com/Melisa-Zorraindo/frontend-QA/issues).

If you wish to contribute to the codebase or add new questions to the database, please follow the installation guide.

## Contact

[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:melisa.zorraindo@gmail.com)
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/melisa-zorraindo-81719618b/)

## License

This project is released under the [ISC](https://www.isc.org/licenses/) license.
