import React from 'react';
import { BsX } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BlueButton, BlueEditBtn, TooltipSearch, WhiteEditBtn } from '../../styled-components';
import { SearchBarBtn } from '../FlowManager/FlowManager.css';
import { FlowbarWarning, EditorBar, FlowEditorCard } from './FlowEditor.css';


const FlowEditor = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <FlowEditorCard>

                <TooltipSearch>
                    <h2>Existing Flows</h2>
                    <SearchBarBtn><BsX /></SearchBarBtn>
                </TooltipSearch>

                <EditorBar>
                    <input type="text" placeholder='http://localhost :8080/foreground.html' />
                </EditorBar>

                <FlowbarWarning>
                    <RiErrorWarningLine />
                    <p>Match any single or multiple characters including / or match any word between / / </p>

                </FlowbarWarning>

                <EditorBar>
                    <input type="text" placeholder='http://localhost :8080/foreground.html' />
                </EditorBar>

                <EditorBar>
                    <input type="text" placeholder='Edit here...' />
                </EditorBar>


                <div className='match-div'>
                    <span className='match'>
                        *Match Successful
                    </span>
                </div>


                <span className='check-box'>
                    <input type="checkbox" name="" id="skipable" />
                    <label htmlFor="skipable">Skipable</label>
                </span>

                <TooltipSearch>
                    <WhiteEditBtn>Cancel</WhiteEditBtn>
                    <BlueEditBtn>Add</BlueEditBtn>
                </TooltipSearch>
            </FlowEditorCard>
        </div>
    );
};

export default FlowEditor;