import React from 'react';
import './Login.css';
import { useState, useEffect , useRef } from 'react';
import icon from '../assets/icon.jpg'
import Group4 from '../assets/Group4.png'
import background from '../assets/background.png'
import smallright from '../assets/small-right.png'
import logo from '../assets/logo.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import key from '../assets/key.png'


const Login = () => {

    useEffect(() => {
        const saasButton = document.getElementById('saasButton');
        const selfHostedButton = document.getElementById('selfHostedButton');
        const saas = document.getElementById('saas');
        const selfHosted = document.getElementById('ss');
        const github = document.getElementById('github');
        const bitbucket = document.getElementById('bitbucket');
        const azure = document.getElementById('azure');
        const gitlab = document.getElementById('gitlab');
        const sso = document.getElementById('sso');

        saasButton.addEventListener('click', () => {
            saasButton.style.backgroundColor = 'rgba(21,112,239,1)';
            saas.style.color = 'rgba(255,255,255,1)';
            selfHostedButton.style.backgroundColor = 'rgba(255,255,255,1)';
            selfHosted.style.color = 'rgba(65,70,81,1)';
            github.style.display = 'flex';
            bitbucket.style.display = 'flex';
            azure.style.display = 'flex';
            gitlab.style.display = 'flex';
            sso.style.display = 'none';
        });

        selfHostedButton.addEventListener('click', () => {
            selfHostedButton.style.backgroundColor = 'rgba(21,112,239,1)';
            selfHosted.style.color = 'rgba(255,255,255,1)';
            saasButton.style.backgroundColor = 'rgba(255,255,255,1)';
            saas.style.color = 'rgba(65,70,81,1)';
            github.style.display = 'none';
            bitbucket.style.display = 'none';
            azure.style.display = 'none';
            gitlab.style.display = 'flex';
            sso.style.display = 'flex';
        })
    }, []);


  return (
    <div>
        <div className="login-page">
            <div className="sidebar-navigation gap-0 border-0 border-r-[1px] border-solid border-r-[rgba(233,234,235,1)] bg-[rgba(255,255,255,1)] relative">
                    <div className="content gap-0 justify-between ">
                        <div className="group37111 w-[474px] h-[322px] gap-0">
                            <div className="total-emails w-[447px] h-[170px] top-[189px] left-[123px] gap-0 absolute">
                                <div className="Bg w-[447px] h-[170px] gap-0 rounded-[24px] bg-[rgba(255,255,255,1)] shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)]">
                                    <div className="frame120 w-[314px] h-[31px] top-[21px] left-[22px] gap-[8px] absolute flex">
                                        <img className="w-[28px] h-[31px] text-[rgba(8,23,53,1)] border-[0.15px] " src={icon} alt=""/>
                                        <h1 className="w-[278px] h-[27px] gap-0 font-inter text-[18px] font-bold leading-[27px] text-left decoration-skip-ink-none text-[rgba(8,23,53,1)]">AI to Detect & Autofix Bad Code</h1>
                                    </div>
                                    <div className="line25 w-[447px] h-0 top-[72px] gap-0 border-t border-solid border-[rgba(230,232,240,1)] absolute"></div>
                                    
                                    <div className="frame111 w-[123px] h-[47px] top-[94.5px] left-[20px] gap-0 absolute">
                                        <h1 className="w-[37px] h-[27px] gap-0 font-inter text-[18px] font-extrabold leading-[27px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#081735]">30+</h1>
                                        <p className="w-[123px] h-[20px] gap-0 font-inter text-[14px] font-normal leading-[20px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#171717]">Language Support</p>
                                    </div>
                                    <div className="frame112 w-[75px] h-[47px] top-[94.5px] left-[188.5px] gap-0 absolute">
                                        <h1 className="w-[46px] h-[27px] gap-0 font-inter text-[18px] font-extrabold leading-[27px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#081735]">10K+</h1>
                                        <p className="w-[75px] h-[20px] gap-0 font-inter text-[14px] font-normal leading-[20px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#171717]">Developers</p>
                                    </div>
                                    <div className="frame113 w-[85px] h-[47px] top-[94.5px] left-[320.5px] gap-0 absolute">
                                        <h1 className="w-[58px] h-[27px] gap-0 font-inter text-[18px] font-extrabold leading-[27px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#081735]">100K+</h1>
                                        <p className="w-[85px] h-[20px] gap-0 font-inter text-[14px] font-normal leading-[20px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#171717]">Hours Saved</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card10 w-[270px] h-[164px] top-[347px] left-[327px] gap-0 absolute">
                                <div className="bg w-[265px] h-[164px] gap-0 rounded-[24px] bg-white shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)]">
                                    <div className="group8 w-[204px] h-[133.37px] top-[15.21px] left-[31.83px] gap-0 absolute">
                                        <div className="group4 w-[56px] h-[56.77px] top-[15.21px] left-[31.83px] gap-0 text-[#9d90fa] opacity-1 mb-5">
                                            <img src={Group4} alt="Group4"/>
                                        </div>
                                        <div className="group5 w-[65px] h-[39.31px] top-[5.33px] left-[150.83px] gap-0 absolute flex ">
                                            <div className="arrow w-[24.33px] h-[24px] top-[48.66px] left-[170.83px] gap-0 transform rotate-[90deg]">
                                                <img className="w-[10.33px] h-[8px] top-[6.33px] left-[16px] gap-0 border-t-[2px] transform rotate-[-90deg]" src={smallright} alt="small-right"/>
                                            </div>
                                            <div>
                                                <p className="percentage w-[29px] h-[20px] top-[26.36px] left-[194.83px] gap-0 font-inter text-[14px] font-extrabold leading-[20px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#0049C6] ml-3">14%</p>
                                                <p className="w-[58px] h-[16px] top-[47.64px] left-[177.83px] gap-0 font-inter text-[12px] font-normal leading-[16px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#171717]">This week</p>
                                            </div>                            
                                        </div>
                                        <div className="group6 w-[108px] h-[60.38px] top-[88.19px] left-[33.83px] gap-0">
                                            <p className="w-[85px] h-[20px] top-[88.19px] left-[33.83px] gap-0 font-inter text-[14px] font-extrabold leading-[20px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#171717]">Issues Fixed</p>
                                            <h1 className="w-[108px] h-[32px] top-[116.57px] left-[33.83px] gap-0 font-inter text-[32px] font-extrabold leading-[32px] text-left underline-position-[from-font] decoration-skip-ink-none text-[#081735]">500K+</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="background-img bottom-[0px] absolute">
                                <img className="w-[284px] h-[319px] gap-0 opacity-1 text-[#818181]" src={background} alt="background"/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="frame989 w-[720px] h-[730px] pt-10">
                    <div className="calendar w-[802px] h-auto gap-0 rounded-xl border border-solid border-[#e9eaeb] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] mr-auto ml-auto">
                        <div className="content w-[802px] h-auto border-b border-gray-300 ">
                            <div className="date-and-text w-[624px] h-auto mb-5 ml-auto mr-auto">
                                <div className="frame10 w-auto h-auto gap-[13.76px] flex mb-5">
                                    <img className="w-[35.62px] h-[40px] gap-0 text-[rgba(24,29,39,1)]" src={logo} alt="logo"/>
                                    <h1 className="w-[152px] h-[33px] text-[30px] font-normal leading-[33px] text-center decoration-skip-ink-none text-[rgba(24,29,39,1)] font-satoshi">CodeAnt AI</h1>
                                </div>
                                <h1 className="w-[368px] h-[48px] text-[32px] font-semibold leading-[48px] text-center decoration-skip-ink-none text-[rgba(24,29,39,1)] font-inter">Welcome to CodeAnt AI</h1>
                            </div>
                            <div className="horizontal-tabs w-[754px] h-auto gap-1 opacity-0.01 rounded-md bg-[rgba(250,250,250,1)] border border-[rgba(233,234,235,1)] flex  m-auto">
                                <button id="saasButton" className="tab-button-base w-[374px] h-auto px-3 py-3 gap-2 rounded-lg bg-[rgba(21,112,239,1)] border-2 border-image-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] shadow-sm" >
                                    <p id="saas" className="w-[55px] h-[28px] text-[20px] font-semibold leading-[28px] text-center decoration-skip-ink-none text-white font-inter">SAAS</p>
                                </button>
                                <button id="selfHostedButton" className="tab-button-base w-[374px] h-auto px-3 py-3 gap-2 rounded-md bg-[rgba(250,250,250,1)] border-2 border-[rgba(233,234,235,1)] shadow-sm" >
                                    <p id="ss" className="w-[113px] h-[28px] text-[20px] font-semibold leading-[28px] text-center decoration-skip-ink-none text-[rgba(65,70,81,1)] font-inter">Self Hosted</p>
                                </button>
                            </div>
                        </div>
                        <div className="main w-[802px] h-[286.34px] pl-[16px] pr-[16px] gap-0 bg-white">
                            <div className="frame1018 pt-[24px] pb-[24px] w-[802px] h-auto gap-0 ">
                                <div id="github" className="google">
                                    <div className="icon">
                                        <img className="w-6 h-6 relative top-[0.43px] left-[0.5px] gap-0 absolut" src={image1} alt="Github"/>
                                    </div>
                                    <a href="https://github.com/login" className="login-btn saas-option">
                                        <p className="w-[147px] h-6 text-base font-semibold leading-6 text-left decoration-skip-ink-none text-[rgba(23,23,23,1)] font-inter">Sign in with Github</p>
                                    </a>
                                </div>
                                <div id="bitbucket" className="google mb-4">
                                    <div className="icon">
                                        <img className="w-[24px] h-[24px] gap-0 top-[0.35px] left-[0.5px] " src={image2} alt="Github"/>
                                    </div>
                                    <a href="https://bitbucket.org/account/signin/" className="login-btn saas-option">
                                        <p className="w-[169px] h-[24px] text-base font-semibold leading-6 text-left decoration-skip-ink-none text-[rgba(23,23,23,1)] font-inter">Sign in with Bitbucket</p>
                                    </a>
                                </div>
                                <div id="azure" className="google mb-4">
                                    <div className="icon">
                                        <img className="w-[24px] h-[24px] gap-0 top-[0.43px] left-[0.5px]" src={image3} alt="Github"/>
                                    </div>
                                    <a href="https://dev.azure.com/login" className="login-btn saas-option">
                                        <p className="w-[202px] h-[24px] text-base font-semibold leading-6 text-left decoration-skip-ink-none text-[rgba(23,23,23,1)] font-inter">Sign in with Azure Devops</p>
                                    </a>
                                </div>
                                <div id="gitlab" className="google">
                                    <div className="icon">
                                        <img className="w-[24px] h-[24px] gap-0 top-[0.43px] left-[0.5px]" src={image4} alt="Github"/>
                                    </div>
                                    <a href="https://gitlab.com/users/sign_in" className="login-btn both">
                                        <p className="w-[146px] h-[24px] text-base font-semibold leading-6 text-left decoration-skip-ink-none text-[rgba(23,23,23,1)] font-inter">Sign in with GitLab</p>
                                    </a>
                                </div>
                                <div id="sso" className="google hide">
                                    <div className="icon">
                                        <img className="w-[24px] h-[24px] gap-0 top-[0.43px] left-[0.5px]" src={key} alt="Github"/>
                                    </div>
                                    <a href="https://login.microsoftonline.com/" className="login-btn self-hosted-option">
                                        <p className="w-[127px] h-[24px] text-base font-semibold leading-6 text-left decoration-skip-ink-none text-[rgba(23,23,23,1)] font-inter">Sign in with SSO</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="w-[672px] h-[24px] gap-0 font-inter text-[16px] font-normal leading-[24px] text-center text-[rgba(24,29,39,1)] m-auto mt-6 mb-6">By signing up you agree to the <span className="w-[672px] h-[24px] gap-0 font-inter text-[16px] font-bold leading-[24px] text-center text-[rgba(24,29,39,1)]">Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
  );
};

export default Login;
