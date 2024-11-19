import { useNavigate, useParams } from "react-router-dom"
import TestTopbar from "../../components/TestTopbar"
import TestSidebar from "../../components/TestSidebar"
import Question from "../../components/question"
import TestBottombar from "../../components/TestBottombar";
import { useEffect, useState } from "react";

const Data = [
    {
        "id": 1,
        "subject": "Physics",
        "question": "A block of mass m is placed on a smooth inclined plane of inclination θ. The block is held by a horizontal string. What is the tension in the string?",
        "options": {
            "a": "mg",
            "b": "mg cos θ",
            "c": "mg sin θ",
            "d": "mg tan θ"
        },
        "correct_answer": "b"
    },
    {
        "id": 2,
        "subject": "Chemistry",
        "question": "Which of the following is an example of a covalent bond?",
        "options": {
            "a": "NaCl",
            "b": "H2O",
            "c": "NaBr",
            "d": "MgO"
        },
        "correct_answer": "b"
    },
    {
        "id": 3,
        "subject": "Mathematics",
        "question": "What is the derivative of sin x?",
        "options": {
            "a": "cos x",
            "b": "-cos x",
            "c": "sin x",
            "d": "-sin x"
        },
        "correct_answer": "a"
    },
    {
        "id": 4,
        "subject": "Physics",
        "question": "What is the velocity of an object in free fall after 3 seconds (assuming g = 10 m/s²)?",
        "options": {
            "a": "10 m/s",
            "b": "20 m/s",
            "c": "30 m/s",
            "d": "40 m/s"
        },
        "correct_answer": "b"
    },
    {
        "id": 5,
        "subject": "Chemistry",
        "question": "What is the pH of a neutral solution at 25°C?",
        "options": {
            "a": "0",
            "b": "7",
            "c": "14",
            "d": "1"
        },
        "correct_answer": "b"
    },
    {
        "id": 6,
        "subject": "Mathematics",
        "question": "The integral of x² with respect to x is:",
        "options": {
            "a": "x³/3 + C",
            "b": "x³ + C",
            "c": "2x + C",
            "d": "x²/2 + C"
        },
        "correct_answer": "a"
    },
    {
        "id": 7,
        "subject": "Physics",
        "question": "A car travels 100 km in 2 hours. What is its average speed?",
        "options": {
            "a": "50 km/h",
            "b": "100 km/h",
            "c": "25 km/h",
            "d": "200 km/h"
        },
        "correct_answer": "a"
    },
    {
        "id": 8,
        "subject": "Chemistry",
        "question": "Which gas is evolved when hydrochloric acid reacts with a metal?",
        "options": {
            "a": "Oxygen",
            "b": "Nitrogen",
            "c": "Hydrogen",
            "d": "Carbon Dioxide"
        },
        "correct_answer": "c"
    },
    {
        "id": 9,
        "subject": "Mathematics",
        "question": "What is the value of sin 45°?",
        "options": {
            "a": "√2/2",
            "b": "1/2",
            "c": "√3/2",
            "d": "1"
        },
        "correct_answer": "a"
    },
    {
        "id": 10,
        "subject": "Physics",
        "question": "What is the SI unit of electrical resistance?",
        "options": {
            "a": "Volt",
            "b": "Ampere",
            "c": "Ohm",
            "d": "Watt"
        },
        "correct_answer": "c"
    },
    {
        "id": 11,
        "subject": "Chemistry",
        "question": "What is the molecular formula of glucose?",
        "options": {
            "a": "C6H12O6",
            "b": "C5H10O5",
            "c": "C6H10O5",
            "d": "C6H14O6"
        },
        "correct_answer": "a"
    },
    {
        "id": 12,
        "subject": "Mathematics",
        "question": "The solution to the equation x² - 4 = 0 is:",
        "options": {
            "a": "x = ±2",
            "b": "x = ±4",
            "c": "x = ±1",
            "d": "x = 0"
        },
        "correct_answer": "a"
    },
    {
        "id": 13,
        "subject": "Physics",
        "question": "What is the principle behind the working of a refrigerator?",
        "options": {
            "a": "Conduction",
            "b": "Convection",
            "c": "Radiation",
            "d": "Evaporation and Condensation"
        },
        "correct_answer": "d"
    },
    {
        "id": 14,
        "subject": "Chemistry",
        "question": "Which of the following is not an alkali metal?",
        "options": {
            "a": "Sodium",
            "b": "Potassium",
            "c": "Calcium",
            "d": "Lithium"
        },
        "correct_answer": "c"
    },
    {
        "id": 15,
        "subject": "Mathematics",
        "question": "The value of tan 30° is:",
        "options": {
            "a": "√3/3",
            "b": "√3",
            "c": "1",
            "d": "0"
        },
        "correct_answer": "a"
    },
    {
        "id": 16,
        "subject": "Physics",
        "question": "A force of 10 N is applied to an object, and it moves 5 m in the direction of the force. What is the work done?",
        "options": {
            "a": "10 J",
            "b": "50 J",
            "c": "5 J",
            "d": "100 J"
        },
        "correct_answer": "b"
    },
    {
        "id": 17,
        "subject": "Chemistry",
        "question": "Which of the following is a noble gas?",
        "options": {
            "a": "Nitrogen",
            "b": "Oxygen",
            "c": "Argon",
            "d": "Carbon Dioxide"
        },
        "correct_answer": "c"
    },
    {
        "id": 18,
        "subject": "Mathematics",
        "question": "The integral of 1/x with respect to x is:",
        "options": {
            "a": "ln|x| + C",
            "b": "e^x + C",
            "c": "x + C",
            "d": "1/x + C"
        },
        "correct_answer": "a"
    },
    {
        "id": 19,
        "subject": "Physics",
        "question": "What is the speed of light in a vacuum?",
        "options": {
            "a": "3 × 10^8 m/s",
            "b": "3 × 10^6 m/s",
            "c": "3 × 10^9 m/s",
            "d": "3 × 10^7 m/s"
        },
        "correct_answer": "a"
    },
    {
        "id": 20,
        "subject": "Chemistry",
        "question": "Which of the following is an example of an exothermic reaction?",
        "options": {
            "a": "Melting of ice",
            "b": "Boiling of water",
            "c": "Combustion of fuel",
            "d": "Dissolution of salt in water"
        },
        "correct_answer": "c"
    },
    {
        "id": 21,
        "subject": "Mathematics",
        "question": "What is the value of log10 100?",
        "options": {
            "a": "2",
            "b": "10",
            "c": "1",
            "d": "100"
        },
        "correct_answer": "a"
    },
    {
        "id": 22,
        "subject": "Physics",
        "question": "What is the SI unit of force?",
        "options": {
            "a": "Newton",
            "b": "Joule",
            "c": "Pascal",
            "d": "Watt"
        },
        "correct_answer": "a"
    },
    {
        "id": 23,
        "subject": "Chemistry",
        "question": "What is the oxidation state of chlorine in NaCl?",
        "options": {
            "a": "+1",
            "b": "-1",
            "c": "0",
            "d": "+2"
        },
        "correct_answer": "b"
    },
    {
        "id": 24,
        "subject": "Mathematics",
        "question": "What is the derivative of x³?",
        "options": {
            "a": "3x²",
            "b": "x²",
            "c": "3x",
            "d": "x³"
        },
        "correct_answer": "a"
    },
    {
        "id": 25,
        "subject": "Physics",
        "question": "What is the formula for calculating the density of an object?",
        "options": {
            "a": "Density = Mass/Volume",
            "b": "Density = Volume/Mass",
            "c": "Density = Mass × Volume",
            "d": "Density = Mass + Volume"
        },
        "correct_answer": "a"
    },
    {
        "id": 26,
        "subject": "Chemistry",
        "question": "Which element has the atomic number 6?",
        "options": {
            "a": "Carbon",
            "b": "Oxygen",
            "c": "Nitrogen",
            "d": "Hydrogen"
        },
        "correct_answer": "a"
    },
    {
        "id": 27,
        "subject": "Mathematics",
        "question": "The value of cos 60° is:",
        "options": {
            "a": "1/2",
            "b": "√3/2",
            "c": "1",
            "d": "0"
        },
        "correct_answer": "a"
    },
    {
        "id": 28,
        "subject": "Physics",
        "question": "The unit of power is:",
        "options": {
            "a": "Joule",
            "b": "Watt",
            "c": "Newton",
            "d": "Ampere"
        },
        "correct_answer": "b"
    },
    {
        "id": 29,
        "subject": "Chemistry",
        "question": "What is the molar mass of water (H₂O)?",
        "options": {
            "a": "18 g/mol",
            "b": "16 g/mol",
            "c": "32 g/mol",
            "d": "20 g/mol"
        },
        "correct_answer": "a"
    },
    {
        "id": 30,
        "subject": "Mathematics",
        "question": "What is the area of a circle with radius r?",
        "options": {
            "a": "πr²",
            "b": "2πr",
            "c": "πr",
            "d": "2πr²"
        },
        "correct_answer": "a"
    },
    {
        "id": 31,
        "subject": "Physics",
        "question": "What is the formula for acceleration?",
        "options": {
            "a": "Acceleration = Force/Mass",
            "b": "Acceleration = Mass/Force",
            "c": "Acceleration = Velocity/Time",
            "d": "Acceleration = Change in Velocity/Change in Time"
        },
        "correct_answer": "d"
    },
    {
        "id": 32,
        "subject": "Chemistry",
        "question": "Which acid is found in vinegar?",
        "options": {
            "a": "Acetic Acid",
            "b": "Sulfuric Acid",
            "c": "Hydrochloric Acid",
            "d": "Nitric Acid"
        },
        "correct_answer": "a"
    },
    {
        "id": 33,
        "subject": "Mathematics",
        "question": "The quadratic formula to solve ax² + bx + c = 0 is:",
        "options": {
            "a": "x = [-b ± √(b² - 4ac)] / 2a",
            "b": "x = [-b ± √(b² + 4ac)] / 2a",
            "c": "x = [-a ± √(b² - 4ac)] / 2b",
            "d": "x = [b ± √(a² - 4ac)] / 2a"
        },
        "correct_answer": "a"
    },
    {
        "id": 34,
        "subject": "Physics",
        "question": "What is the principle of conservation of energy?",
        "options": {
            "a": "Energy can neither be created nor destroyed, only transformed",
            "b": "Energy can be created but not destroyed",
            "c": "Energy can be destroyed but not created",
            "d": "Energy can be created and destroyed"
        },
        "correct_answer": "a"
    },
    {
        "id": 35,
        "subject": "Chemistry",
        "question": "Which element is represented by the symbol Fe?",
        "options": {
            "a": "Iron",
            "b": "Fluorine",
            "c": "Francium",
            "d": "Fermium"
        },
        "correct_answer": "a"
    },
    {
        "id": 36,
        "subject": "Mathematics",
        "question": "The slope of the line y = 3x + 5 is:",
        "options": {
            "a": "3",
            "b": "5",
            "c": "0",
            "d": "1"
        },
        "correct_answer": "a"
    },
    {
        "id": 37,
        "subject": "Physics",
        "question": "What is the formula for gravitational potential energy?",
        "options": {
            "a": "PE = mgh",
            "b": "PE = 1/2 mv²",
            "c": "PE = mv",
            "d": "PE = m/g"
        },
        "correct_answer": "a"
    },
    {
        "id": 38,
        "subject": "Chemistry",
        "question": "Which of the following is an isotope of Carbon?",
        "options": {
            "a": "Carbon-12",
            "b": "Carbon-14",
            "c": "Carbon-16",
            "d": "Both a and b"
        },
        "correct_answer": "d"
    },
    {
        "id": 39,
        "subject": "Mathematics",
        "question": "What is the value of 2⁴?",
        "options": {
            "a": "16",
            "b": "8",
            "c": "4",
            "d": "32"
        },
        "correct_answer": "a"
    },
    {
        "id": 40,
        "subject": "Physics",
        "question": "What is the unit of electric current?",
        "options": {
            "a": "Coulomb",
            "b": "Volt",
            "c": "Ampere",
            "d": "Ohm"
        },
        "correct_answer": "c"
    },
    {
        "id": 41,
        "subject": "Chemistry",
        "question": "Which of the following is a strong acid?",
        "options": {
            "a": "Hydrochloric Acid",
            "b": "Acetic Acid",
            "c": "Citric Acid",
            "d": "Formic Acid"
        },
        "correct_answer": "a"
    },
    {
        "id": 42,
        "subject": "Mathematics",
        "question": "The area of a triangle with base b and height h is:",
        "options": {
            "a": "1/2 bh",
            "b": "bh",
            "c": "2bh",
            "d": "bh/2"
        },
        "correct_answer": "a"
    },
    {
        "id": 43,
        "subject": "Physics",
        "question": "What is the speed of sound in air at room temperature?",
        "options": {
            "a": "343 m/s",
            "b": "330 m/s",
            "c": "300 m/s",
            "d": "350 m/s"
        },
        "correct_answer": "a"
    },
    {
        "id": 44,
        "subject": "Chemistry",
        "question": "Which of the following is a non-metal?",
        "options": {
            "a": "Iron",
            "b": "Sodium",
            "c": "Oxygen",
            "d": "Calcium"
        },
        "correct_answer": "c"
    },
    {
        "id": 45,
        "subject": "Mathematics",
        "question": "What is the integral of e^x with respect to x?",
        "options": {
            "a": "e^x + C",
            "b": "e^x",
            "c": "x e^x + C",
            "d": "e^x / x"
        },
        "correct_answer": "a"
    },
    {
        "id": 46,
        "subject": "Physics",
        "question": "What is the unit of work done?",
        "options": {
            "a": "Joule",
            "b": "Newton",
            "c": "Watt",
            "d": "Pascal"
        },
        "correct_answer": "a"
    },
    {
        "id": 47,
        "subject": "Chemistry",
        "question": "Which is the most abundant gas in the Earth's atmosphere?",
        "options": {
            "a": "Nitrogen",
            "b": "Oxygen",
            "c": "Carbon Dioxide",
            "d": "Argon"
        },
        "correct_answer": "a"
    },
    {
        "id": 48,
        "subject": "Mathematics",
        "question": "What is the derivative of tan x?",
        "options": {
            "a": "sec² x",
            "b": "sec x",
            "c": "csc x",
            "d": "-sec² x"
        },
        "correct_answer": "a"
    },
    {
        "id": 49,
        "subject": "Physics",
        "question": "What is the formula for kinetic energy?",
        "options": {
            "a": "KE = 1/2 mv²",
            "b": "KE = mgh",
            "c": "KE = mv",
            "d": "KE = 1/2 m²"
        },
        "correct_answer": "a"
    },
    {
        "id": 50,
        "subject": "Chemistry",
        "question": "What is the common name for sodium chloride?",
        "options": {
            "a": "Salt",
            "b": "Soda",
            "c": "Lime",
            "d": "Sugar"
        },
        "correct_answer": "a"
    },
    {
        "id": 51,
        "subject": "Mathematics",
        "question": "The sum of the angles in a triangle is:",
        "options": {
            "a": "180°",
            "b": "360°",
            "c": "90°",
            "d": "270°"
        },
        "correct_answer": "a"
    },
    {
        "id": 52,
        "subject": "Physics",
        "question": "What is the unit of power?",
        "options": {
            "a": "Watt",
            "b": "Joule",
            "c": "Newton",
            "d": "Coulomb"
        },
        "correct_answer": "a"
    },
    {
        "id": 53,
        "subject": "Chemistry",
        "question": "Which of the following compounds is used as a refrigerant?",
        "options": {
            "a": "Freon",
            "b": "Ammonia",
            "c": "Carbon Dioxide",
            "d": "Sulfur Dioxide"
        },
        "correct_answer": "a"
    },
    {
        "id": 54,
        "subject": "Mathematics",
        "question": "What is the value of the sine of 90°?",
        "options": {
            "a": "1",
            "b": "0",
            "c": "√2/2",
            "d": "√3/2"
        },
        "correct_answer": "a"
    },
    {
        "id": 55,
        "subject": "Physics",
        "question": "Which law states that for every action, there is an equal and opposite reaction?",
        "options": {
            "a": "Newton's First Law",
            "b": "Newton's Second Law",
            "c": "Newton's Third Law",
            "d": "Law of Universal Gravitation"
        },
        "correct_answer": "c"
    },
    {
        "id": 56,
        "subject": "Chemistry",
        "question": "Which of the following is an example of a physical change?",
        "options": {
            "a": "Boiling of water",
            "b": "Rusting of iron",
            "c": "Burning of wood",
            "d": "Rotting of food"
        },
        "correct_answer": "a"
    },
    {
        "id": 57,
        "subject": "Mathematics",
        "question": "What is the perimeter of a square with side length a?",
        "options": {
            "a": "4a",
            "b": "2a",
            "c": "a²",
            "d": "4a²"
        },
        "correct_answer": "a"
    },
    {
        "id": 58,
        "subject": "Physics",
        "question": "What is the formula for Ohm's Law?",
        "options": {
            "a": "V = IR",
            "b": "V = I/R",
            "c": "V = R/I",
            "d": "I = VR"
        },
        "correct_answer": "a"
    },
    {
        "id": 59,
        "subject": "Chemistry",
        "question": "What is the chemical formula for sulfuric acid?",
        "options": {
            "a": "H₂SO₄",
            "b": "HCl",
            "c": "HNO₃",
            "d": "H₂CO₃"
        },
        "correct_answer": "a"
    },
    {
        "id": 60,
        "subject": "Mathematics",
        "question": "What is the area of a rectangle with length l and width w?",
        "options": {
            "a": "l × w",
            "b": "2(l + w)",
            "c": "l² + w²",
            "d": "2lw"
        },
        "correct_answer": "a"
    },
    {
        "id": 61,
        "subject": "Physics",
        "question": "What is the unit of electric charge?",
        "options": {
            "a": "Coulomb",
            "b": "Volt",
            "c": "Ampere",
            "d": "Watt"
        },
        "correct_answer": "a"
    },
    {
        "id": 62,
        "subject": "Chemistry",
        "question": "Which of the following is an alkali metal?",
        "options": {
            "a": "Sodium",
            "b": "Magnesium",
            "c": "Calcium",
            "d": "Iron"
        },
        "correct_answer": "a"
    },
    {
        "id": 63,
        "subject": "Mathematics",
        "question": "What is the value of 7 factorial (7!)?",
        "options": {
            "a": "5040",
            "b": "720",
            "c": "343",
            "d": "49"
        },
        "correct_answer": "a"
    },
    {
        "id": 64,
        "subject": "Physics",
        "question": "What is the formula for the acceleration due to gravity?",
        "options": {
            "a": "g = Gm/r²",
            "b": "g = Gm/r",
            "c": "g = G/r²",
            "d": "g = m/G"
        },
        "correct_answer": "a"
    },
    {
        "id": 65,
        "subject": "Chemistry",
        "question": "What is the common name for H₂SO₄?",
        "options": {
            "a": "Sulfuric Acid",
            "b": "Hydrochloric Acid",
            "c": "Nitric Acid",
            "d": "Acetic Acid"
        },
        "correct_answer": "a"
    },
    {
        "id": 66,
        "subject": "Mathematics",
        "question": "What is the value of (a + b)²?",
        "options": {
            "a": "a² + 2ab + b²",
            "b": "a² + b²",
            "c": "a² - 2ab + b²",
            "d": "a² + 2ab - b²"
        },
        "correct_answer": "a"
    },
    {
        "id": 67,
        "subject": "Physics",
        "question": "What is the formula for centripetal force?",
        "options": {
            "a": "F = mv²/r",
            "b": "F = mr²/v",
            "c": "F = mvr",
            "d": "F = m/g"
        },
        "correct_answer": "a"
    },
    {
        "id": 68,
        "subject": "Chemistry",
        "question": "What is the symbol for Potassium?",
        "options": {
            "a": "K",
            "b": "P",
            "c": "Po",
            "d": "Pt"
        },
        "correct_answer": "a"
    },
    {
        "id": 69,
        "subject": "Mathematics",
        "question": "The area of a trapezium with bases a and b and height h is:",
        "options": {
            "a": "1/2 (a + b)h",
            "b": "a + b + h",
            "c": "a × b × h",
            "d": "a² + b²"
        },
        "correct_answer": "a"
    },
    {
        "id": 70,
        "subject": "Physics",
        "question": "What is the unit of electric resistance?",
        "options": {
            "a": "Ohm",
            "b": "Volt",
            "c": "Ampere",
            "d": "Watt"
        },
        "correct_answer": "a"
    },
    {
        "id": 71,
        "subject": "Chemistry",
        "question": "Which of the following is a noble gas?",
        "options": {
            "a": "Neon",
            "b": "Nitrogen",
            "c": "Oxygen",
            "d": "Hydrogen"
        },
        "correct_answer": "a"
    },
    {
        "id": 72,
        "subject": "Mathematics",
        "question": "What is the value of 3³?",
        "options": {
            "a": "27",
            "b": "9",
            "c": "81",
            "d": "6"
        },
        "correct_answer": "a"
    },
    {
        "id": 73,
        "subject": "Physics",
        "question": "What is the formula for the force of gravity?",
        "options": {
            "a": "F = G(m₁m₂/r²)",
            "b": "F = G(m₁m₂/r)",
            "c": "F = G(m₁ + m₂)/r²",
            "d": "F = G(m₁ - m₂)/r²"
        },
        "correct_answer": "a"
    },
    {
        "id": 74,
        "subject": "Chemistry",
        "question": "What is the pH of pure water?",
        "options": {
            "a": "7",
            "b": "0",
            "c": "14",
            "d": "1"
        },
        "correct_answer": "a"
    },
    {
        "id": 75,
        "subject": "Mathematics",
        "question": "What is the value of √144?",
        "options": {
            "a": "12",
            "b": "24",
            "c": "16",
            "d": "8"
        },
        "correct_answer": "a"
    }
]


const Test = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(true)
    const [timeLeft, setTimeLeft] = useState(3600 * 3)
    const [isTestStarted, setIsTestStarted] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerStatus, setAnswerStatus] = useState(
        Data.map(() => ({ answered: false, markedForReview: false, selectedOption: null }))
    )

    useEffect(() => {
        let interval;
        if (isTestStarted && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft == 0) {
            clearInterval(interval)
            handleClick('/dashboard/profile')
        }

        return () => clearInterval(interval)
    }, [isTestStarted, timeLeft])

    const handleStartTest = () => {
        setIsOpen(false)
        setIsTestStarted(true)
    }

    const handleClick = (route) => {
        navigate(route)
    }

    const handleOptionChange = (key) => {
        const updatedStatus = [...answerStatus]
        updatedStatus[currentQuestionIndex] = {
            ...updatedStatus[currentQuestionIndex],
            selectedOption: key,
        }
        setAnswerStatus(updatedStatus)
    }

    const handleSave = () => {
        const updatedStatus = [...answerStatus]
        if (updatedStatus[currentQuestionIndex].selectedOption != null) {
            updatedStatus[currentQuestionIndex] = {
                ...updatedStatus[currentQuestionIndex],
                answered: true
            }
            setAnswerStatus(updatedStatus)
        }
    }

    const handleReview = () => {
        const updatedStatus = [...answerStatus]
        updatedStatus[currentQuestionIndex] = {
            ...updatedStatus[currentQuestionIndex],
            markedForReview: true
        }
        setAnswerStatus(updatedStatus)
    }

    const handleClear = () => {
        const updatedStatus = [...answerStatus]
        updatedStatus[currentQuestionIndex] = {
            ...updatedStatus[currentQuestionIndex],
            selectedOption: null,
            answered: false,
            markedForReview: false
        }
        setAnswerStatus(updatedStatus)
    }

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    const handleNext = () => {
        if (currentQuestionIndex < Data.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    return (
        <div className='flex flex-row w-[1280px] mx-auto'>
            {
                isOpen && (
                    <div className='fixed z-50 w-screen h-screen left-0 right-0 bg-slate-500/50 flex justify-center items-center'>
                        <div className="w-96 bg-white rounded flex flex-col justify-center items-center p-5 gap-5">
                            <div className="text-lg text-slate-700">All the Best 😀</div>
                            <div className="w-full flex flex-row justify-evenly items-center">
                                <div
                                    onClick={() => handleClick('/dashboard')}
                                    className="w-2/5 p-3 bg-slate-300 rounded text-center text-sm text-white font-extrabold cursor-pointer">exit</div>
                                <div
                                    className="w-2/5 p-3 bg-rose-400 rounded text-center text-sm text-white font-extrabold cursor-pointer"
                                    onClick={() => handleStartTest()}>start</div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='w-2/3 border-l-2 relative'>
                <div className='w-full sticky top-0 right-0'>
                    <TestTopbar currentQuestionIndex={currentQuestionIndex} timeLeft={timeLeft} />
                </div>
                <div>
                    <Question question={Data[currentQuestionIndex]} selectedOption={answerStatus[currentQuestionIndex].selectedOption} handleOptionChange={handleOptionChange} />
                </div>
                <div className='absolute bottom-0 left-0 w-full'>
                    <TestBottombar
                        handlePrevious={handlePrevious}
                        handleNext={handleNext}
                        handleSave={handleSave}
                        handleReview={handleReview}
                        handleClear={handleClear}
                    />
                </div>
            </div>
            <div className='w-1/3 sticky top-0 right-0 h-screen border-l-2 border-r-2'>
                <TestSidebar
                    answerStatus={answerStatus}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                />
            </div>
        </div>
    )
}

export default Test