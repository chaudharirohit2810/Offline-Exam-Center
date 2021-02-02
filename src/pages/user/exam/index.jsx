import { Divider, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { secureStorage } from "../../../config";
import useSecureStorage from "../../../hooks/useSecureStorage";
import Style from "./exam.module.scss";
import QuestionCard from "./questionCard";
import QuestionNumberCard from "./questionNumberCard";
import TimeVideoComponent from "./timeVideoComponent";

const Exam = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const exam = JSON.parse(secureStorage.getItem("exams"))[
        parseInt(secureStorage.getItem("selectedQuiz"))
    ];
    const totalQuestions = exam.Questions.length;
    const [answers, setAnswers] = useSecureStorage(
        "answers",
        Array.apply(null, Array(totalQuestions)).map(function () {
            return undefined;
        })
    );

    return (
        <Paper className={Style.main_container}>
            <Typography variant="h4">Title of Quiz</Typography>
            <Divider />

            <Paper variant="elevation" className={Style.components_container}>
                <QuestionNumberCard
                    totalQuestions={totalQuestions}
                    setCurrentQuestion={setCurrentQuestion}
                    currentQuestion={currentQuestion}
                />
                {currentQuestion > totalQuestions ? (
                    <Paper
                        className={Style.question_container}
                        variant="outlined"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h4"
                            style={{ textAlign: "center" }}
                        >
                            Congratulations <br></br>Question Paper Submitted!
                        </Typography>
                    </Paper>
                ) : (
                    <QuestionCard
                        question={exam.Questions[currentQuestion - 1]}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        totalQuestions={totalQuestions}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                )}
                <TimeVideoComponent endTime={exam.endTime} />
            </Paper>
        </Paper>
    );
};

export default Exam;
