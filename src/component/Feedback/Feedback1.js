import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import { ToolViewFooter2, WhiteBorderLessBtn, WhiteButton, WhiteEditBtn } from '../../styled-components';
import { FeedBackContainer, FeedbackScale, ScaleBtn } from './Feedback.css';

const Feedback1 = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <FeedBackContainer>
                <BsX />
                <div className='feedback-body'>
                    <h4>How likely are you to answer to this question</h4>
                    <FeedbackScale>
                        <ScaleBtn>1</ScaleBtn>
                        <ScaleBtn>2</ScaleBtn>
                        <ScaleBtn>3</ScaleBtn>
                        <ScaleBtn>4</ScaleBtn>
                        <ScaleBtn>5</ScaleBtn>
                        <ScaleBtn>6</ScaleBtn>
                        <ScaleBtn>7</ScaleBtn>
                        <ScaleBtn>8</ScaleBtn>
                        <ScaleBtn>9</ScaleBtn>
                        <ScaleBtn>10</ScaleBtn>
                    </FeedbackScale>

                    <div className='scale-msg'>
                        <p>Not Likely at all</p>
                        <p>Extremely Likely</p>
                    </div>

                    <div className='feedback-box'>
                        <p>Tell us how we can imporve </p>
                        <textarea placeholder='Description' id="" ></textarea>
                    </div>
                </div>

                <ToolViewFooter2>
                    <WhiteBorderLessBtn><span>Skip</span></WhiteBorderLessBtn>
                    <WhiteBorderLessBtn><AiOutlineArrowRight /></WhiteBorderLessBtn>
                </ToolViewFooter2>
            </FeedBackContainer>
        </div>
    );
};

export default Feedback1;