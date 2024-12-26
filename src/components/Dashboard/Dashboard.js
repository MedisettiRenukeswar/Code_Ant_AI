import React from 'react';
import { useState, useEffect  } from 'react';
import './Dashboard.css';
import icon from '../assets/icon.jpg'
import bars from '../assets/bars.png'
import home from '../assets/home.png'
import cloud from '../assets/cloud.png'
import book from '../assets/book.png'
import logo from '../assets/logo.png'
import home2 from '../assets/home2.png'
import gear from '../assets/gear.png'
import code from '../assets/code.png'
import close from '../assets/close.png'
import phone from '../assets/phone.png'
import signout from '../assets/sign-out.png'
import chevrondown from '../assets/chevron-down.png'
import refresh from '../assets/refresh.png'
import plus from '../assets/plus.png'
import search from '../assets/search.png'
import Ellipse from '../assets/Ellipse.png'
import database from '../assets/database.png'

const Dashboard = () => {
    const [repositories, setRepositories] = useState([
        { name: 'design-system', mode: 'Public', language: 'React', size: '7320 KB', updated: '1 day ago' },
        { name: 'codeant-ci-app', mode: 'Private', language: 'JavaScript', size: '5871 KB', updated: '2 days ago' },
        { name: 'analytics-dashboard', mode: 'Private', language: 'Python', size: '4521 KB', updated: '5 days ago' },
        { name: 'mobile-app', mode: 'Public', language: 'Swift', size: '3096 KB', updated: '3 days ago' },
        { name: 'e-commerce-platform', mode: 'Private', language: 'Java', size: '6210 KB', updated: '6 days ago' },
        { name: 'blog-website', mode: 'Public', language: 'HTML/CSS', size: '1876 KB', updated: '4 days ago' },
        { name: 'social-network', mode: 'Private', language: 'PHP', size: '5432 KB', updated: '7 days ago' },
      ]);
    
      const [searchQuery, setSearchQuery] = useState('');
      const [menuVisible, setMenuVisible] = useState(false);
    
      const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    
      const addRepository = () => {
        const name = prompt('Enter repository name:');
        const mode = prompt('Enter repository mode (Public/Private):');
        const language = prompt('Enter programming language:');
        
        if (name && mode && language) {
          setRepositories(prevRepos => [
            ...prevRepos,
            { name, mode, language, size: '0 KB', updated: 'Just now' }
          ]);
        } else {
          alert('Please provide valid inputs!');
        }
      };
    
      const filteredRepositories = repositories.filter(repo =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 827) {
            setMenuVisible(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
        <div id="root" className="bg-[#fff]">
        <div className="top-menu w-full bg-white border-b border-gray-300 shadow-md">
        <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleMenu}>
          <div className="p2-frame9 flex gap-3">
            <img className="w-[28.5px] h-[32px] font-Satoshi" src={logo} alt="logo" />
            <h1 className="w-[122px] h-[26px]">CodeAnt AI</h1>
          </div>
          <div>
            <img className={menuVisible ? 'hidden' : ''} src={bars} alt="bars" />
            <img className={!menuVisible ? 'hidden' : ''} src={close} alt="close" />
          </div>
        </div>
        <ul
          id="p2-dropdown-menu"
          className={`flex-col ${menuVisible ? 'visible' : 'hidden'} absolute w-full bg-white shadow-md border-t border-gray-300 p-4`}
        >
                <li>
                    <select className="text-sm bg-transparent border-black rounded-full cursor-pointer">
                        <option>UtkarshDhairyaPanwar</option>
                    </select>
                </li>
                <button className="p2-Nav-item-base" type="button">
                  <div className="p2-content">
                    <div className="p2-text-icon">
                      <div className="p2-frame10">
                        <img src={home2} alt="Repositories" />
                      </div>
                      <p>Repositories</p>
                    </div>
                  </div>
                </button>
                    <button className="p2-Nav-item-base" type="button">
                        <div className="p2-content">
                            <div className="p2-text-icon">
                                <div className="p2-frame10">
                                    <img src={code} alt="Repositories"/>
                                </div>
                                <p className="md Semibold">AI Code Review</p>
                            </div>
                        </div>
                    </button>
                    <button className="p2-Nav-item-base" type="button">
                        <div className="p2-content">
                            <div className="p2-text-icon">
                                <div className="p2-frame10">
                                    <img src={cloud} alt="Repositories"/>
                                </div>
                                <p>Cloud Security</p>
                            </div>
                        </div>
                    </button>
                    <button className="p2-Nav-item-base" type="button">
                        <div className="p2-content">
                            <div className="p2-text-icon">
                                <div className="p2-frame10">
                                    <img src={book} alt="Repositories"/>
                                </div>
                                <p>How to Use</p>
                            </div>
                        </div>              
                    </button>
                    <button className="p2-Nav-item-base" type="button">
                        <div className="p2-content">
                            <div className="p2-text-icon">
                                <div className="p2-frame10">
                                    <img src={gear} alt="Repositories"/>
                                </div>
                                <p>Settings</p>
                            </div>
                        </div>                   
                    </button>  
                    <button className="p2-Nav-item-base" type="button">
                        <dvi className="p2-content">
                            <div className="p2-text-icon">
                                <div className="p2-frame10">
                                    <img src={phone} alt="phone"/>
                                </div>
                                <p>Support</p>
                            </div>
                        </dvi>
                    </button>
                    <button className="p2-Nav-item-base" type="button">
                        <div className="p2-content">
                            <div className="p2-text-icon">
                                <div className="p2-frame10">
                                    <img src={signout} alt="signout"/>
                                </div>
                                <p>Logout</p>
                            </div>
                        </div>
                    </button>       
                </ul>
            </div>
            <div id="p2-sidebar" className="p2-text-black h-screen fixed w-64">
                <div className="p2-top-navigation">
                    <div className="p2-header w-[255px] h-[92px] pr-[2rem] pl-[1rem] gap-[2rem] mb-[1rem]"> 
                        <div className="p2-frame9 flex w-[161.5px] h-[32px] gap-[11px] ">
                            <div className="p2-group3 w-[28.5px] h-[32px] gap-0 text-[#181D27]">
                                <img className="w-[28.5px] h-[32px] gap-0" src={icon} alt="CodeAnt AI" />
                            </div>
                            <h2 className="w-[122px] h-[26px] gap-0 font-satoshi text-[24px] font-normal leading-[26.4px] text-left text-[#181D27]">CodeAnt AI</h2>
                        </div>
                        <div className="p2-input-dropdown flex w-[202px] h-[40px] gap-[1rem] mt-[1rem]">
                            <div className="p2-input flex w-[202px] h-[40px] pt-[1rem] pr-[2rem] pm-[2rem] pl-[2rem] gap-[11px] space-between rounded-[8px] border-t border-b-0 border-l-0 border-r-0 bg-white border-gray-300 shadow-sm">
                                <select className="p2-dropdown-content w-full h-[24px] gap-4">
                                    <option className="w-[350.49px] h-[24px] gap-0 text-[16px] font-normal leading-[24px] text-left text-gray-900">
                                        UtkarshDhairyaPanwar
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="p2-navigation ">
                        <button className="p2-top-Nav-item-base" type="button">
                            <div className="p2-home">
                                <div className="p2-text-icon">
                                    <div className="p2-frame10">
                                        <img src={home}alt="Repositories"/>
                                    </div>
                                    <p>Repositories</p>
                                </div>
                            </div>
                        </button>
                        <button className="p2-top-Nav-item-base" type="button">
                            <div className="p2-code flex">
                                <div className="p2-text-icon">
                                    <div className="p2-frame10">
                                        <img src={code} alt="Repositories"/>
                                    </div>
                                    <p className="p2-md Semibold">AI Code Review</p>
                                </div>
                            </div>
                        </button>
                        <button className="p2-top-Nav-item-base" type="button">
                            <div className="p2-cloud flex">
                                <div className="p2-text-icon">
                                    <div className="p2-frame10">
                                        <img src={cloud} alt="Repositories"/>
                                    </div>
                                    <p>Cloud Security</p>
                                </div>
                            </div>
                        </button>
                        <button className="p2-top-Nav-item-base" type="button">
                            <div className="p2-book flex">
                                <div className="p2-text-icon">
                                    <div className="p2-frame10">
                                        <img src={book} alt="Repositories"/>
                                    </div>
                                    <p>How to Use</p>
                                </div>
                            </div>              
                        </button>
                        <button className="p2-top-Nav-item-base" type="button">
                            <div className="p2-gear flex">
                                <div className="p2-text-icon">
                                    <div className="p2-frame10">
                                        <img src={gear} alt="Repositories"/>
                                    </div>
                                    <p>Settings</p>
                                </div>
                            </div>                   
                        </button> 
                    </div>
                </div>
                <div id="p2-footer" className="absolute bottom-4 w-full px-4">
                    <div className="p2-bottom-navigation">
                        <button className="p2-Nav-item-base">
                            <dvi className="p2-content">
                                <div className="p2-text-icon">
                                    <div className="p2-frame10">
                                        <img src={phone} alt="phone"/>
                                    </div>
                                    <p>Support</p>
                                </div>
                            </dvi>
                        </button>
                        <button className="p2-Nav-item-base">
                            <div className="p2-content">
                                <div className="p2-text-icon">
                                    <div className="p2-frame10">
                                        <img src={signout} alt="signout"/>
                                    </div>
                                    <p>Logout</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="p2-frame989 flex-1 p-6">
                <div className="p2-calender">
                    <div className="p2-right-header">
                        <div className="p2-header-content">
                            <div className="p2-frame990">
                                <div className="p2-date-and-text">
                                    <h1 className="w-[146px] h-[32px] font-extrabold font-inter" >Repositories</h1>
                                    <p>33 total repositories</p>
                                </div>
                                <div className="p2-frame1014">
                                    <button id="p2-refreshBtn" type="button" className="p2-button">
                                        <div className="p2-frame1015">
                                            <img src={refresh} alt="refresh"/>
                                        </div>
                                        <div className="p2-text-padding">
                                            <p>Refresh All</p>
                                        </div>
                                    </button>
                                    <button id="p2-addRepoBtn" type="button" className="p2-button">
                                        <div className="p2-frame1015">
                                            <img src={plus} alt="plus"/>
                                        </div>
                                        <div className="p2-text-padding">
                                            <p>Add Repository</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="p2-buttons-button flex items-center space-x-2 mb-4">
                                <div className="p2-frame10">
                                    <img src={search} alt="search" />
                                </div>
                                <input
                                    className="p2-input-search"
                                    type="text"
                                    placeholder="Search Repositories"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="p2-input-search"
                                />
                                </div>
                        </div>
                    </div>
                    <div className="p2-main">
                  <div id="p2-repositoryList">
                    {filteredRepositories.map((repo) => (
                      <div className="p2-frame1018 shadow flex justify-between items-center" key={repo.name}>
                        <div className="p2-frame1019">
                          <div className="p2-repo flex">
                            <h2 className="font-semibold text-gray-800 text-lg items-center">{repo.name}</h2>
                            <div className="p2-badge">
                              <span className={`text-${repo.mode === 'Public' ? 'blue' : 'gray'}-500 text-sm font-medium`}>
                                {repo.mode}
                              </span>
                            </div>
                          </div>
                          <div className="p2-frame1017 flex">
                            <div className="p2-language-repo flex">
                              <p className="p2-language">{repo.language}</p>
                              <img src={Ellipse} alt="" />
                            </div>
                            <div className="p2-size-repo flex">
                              <img src={database} alt="" />
                              <p className="p2-size">{repo.size}</p>
                            </div>
                            <div className="p2-time-repo flex">
                              <p className="p2-time">Updated {repo.updated}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            </div>
        </div>
  );
};

export default Dashboard;
