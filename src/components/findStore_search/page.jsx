"use client"
import React, { useState , useRef , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMapPin, faPhoneVolume, faClock } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap";
import splitType from "split-type";
import styles from "@/components/findStore_search/findStore_search.module.css"
import "./findStore.css"
function Mapsection() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('');
    const options1 = ['Mumbai', "Gujarat", 'Goa', 'Rajasthan'];
    const stateDistricts = [
        { state: 'Mumbai', districts: ['District1', 'District2', 'District3', 'District4'] },
        { state: 'Gujarat', districts: ['Surat', 'Ahmedabad', 'Rajkot', 'Bhuj'] },
        { state: 'Goa', districts: ['DistrictA', 'DistrictB', 'DistrictC', 'DistrictD'] },
        { state: 'Rajasthan', districts: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota'] },
    ];
    const options2 = stateDistricts.find((item) => item.state === selectedOption1)?.districts || [];
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState('');

    const locationsData = {
        'Gujarat': {
            'Ahmedabad': {
                content1: "Royalé Touché Laminates and Wooden Floors - Ahmedabad",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Naroda, Ahmedabad, Gujarat 382345",
                mapLocation: "Naroda, Ahmedabad",
                phone: "0635 9800 014",
                hours: "09:00 AM to 07:00 PM",
                destinationLat: 23.0227968,
                destinationLng: 72.5090304,
            },
            'Surat': {
                content1: "Royalé Touché Laminates and Wooden Floors - Surat",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, Surat, Gujarat 11111",
                mapLocation: "Varacha, Surat",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 23.0227968,
                destinationLng: 72.5090304,
            },
            'Rajkot': {
                content1: "Royalé Touché Laminates and Wooden Floors - Rajkot",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, Rajkot, Gujarat 787847",
                mapLocation: "Mavdi, Rajkot",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 23.0227968,
                destinationLng: 72.5090304,
            },
            'Bhuj': {
                content1: "Royalé Touché Laminates and Wooden Floors - Bhuj",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, Bhuj, Gujarat 787847",
                mapLocation: "Mavdi, Bhuj",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 23.0227968,
                destinationLng: 72.5090304,
            },
        },
        'Mumbai': {
            'District1': {
                content1: "Royalé Touché Laminates and Wooden Floors - District-1",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Naroda, Mumbai 382345",
                mapLocation: "District1, Mumbai",
                phone: "0635 9800 014",
                hours: "09:00 AM to 07:00 PM",
                destinationLat: 19.06263015951215,
                destinationLng: 72.87587933411474,
            },
            'District2': {
                content1: "Royalé Touché Laminates and Wooden Floors - District2",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, District2,11111",
                mapLocation: "District2, Mumbai",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 19.06263015951215,
                destinationLng: 72.87587933411474,
            },
            'District3': {
                content1: "Royalé Touché Laminates and Wooden Floors - District3",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, District3, 787847",
                mapLocation: "District3, Mumbai",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 19.06263015951215,
                destinationLng: 72.87587933411474,
            },
            'District4': {
                content1: "Royalé Touché Laminates and Wooden Floors - District4",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, District4, 787847",
                mapLocation: "District4, Mumbai",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 19.06263015951215,
                destinationLng: 72.87587933411474,
            },
        },
        'Goa': {
            'DistrictA': {
                content1: "Royalé Touché Laminates and Wooden Floors - District-A",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Naroda, Goa 382345",
                mapLocation: "DistrictA, Goa",
                phone: "0635 9800 014",
                hours: "09:00 AM to 07:00 PM",
                destinationLat: 15.412801428860462,
                destinationLng: 74.15183986168783,
            },
            'DistrictB': {
                content1: "Royalé Touché Laminates and Wooden Floors - District-B",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, Goa 11111",
                mapLocation: "DistrictB, Goa",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 15.412801428860462,
                destinationLng: 74.15183986168783,
            },
            'DistrictC': {
                content1: "Royalé Touché Laminates and Wooden Floors - District-C",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, Goa 787847",
                mapLocation: "DistrictC, Goa",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 15.412801428860462,
                destinationLng: 74.15183986168783,
            },
            'DistrictD': {
                content1: "Royalé Touché Laminates and Wooden Floors - District-D",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha,Goa 787847",
                mapLocation: "DistrictD, Goa",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 15.412801428860462,
                destinationLng: 74.15183986168783,
            },
        },
        'Rajasthan': {
            'Jaipur': {
                content1: "Royalé Touché Laminates and Wooden Floors -Jaipur",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Jaipur 382345",
                mapLocation: "DistrictA, Goa",
                phone: "0635 9800 014",
                hours: "09:00 AM to 07:00 PM",
                destinationLat: 27.098378715951807,
                destinationLng: 74.19051236164566,
            },
            'Udaipur': {
                content1: "Royalé Touché Laminates and Wooden Floors -Jaipur",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, Jaipur 11111",
                mapLocation: "DistrictB, Udaipur",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 27.098378715951807,
                destinationLng: 74.19051236164566,
            },
            'Jodhpur': {
                content1: "Royalé Touché Laminates and Wooden Floors - Jaipur",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha, Jaipur 787847",
                mapLocation: "DistrictC, Jodhpur",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 27.098378715951807,
                destinationLng: 74.19051236164566,
            },
            'Kota': {
                content1: "Royalé Touché Laminates and Wooden Floors - Jaipur",
                address: "1st Floor, City Center, Naroda Patiya, Near SRP Camp, Varacha,Jaipur 787847",
                mapLocation: "DistrictD, Kota",
                phone: "78787 7474 5555",
                hours: "09:00 AM to 06:00 PM",
                destinationLat: 27.098378715951807,
                destinationLng: 74.19051236164566,
            },
        },
    };

    const [selectedLocationContent, setSelectedLocationContent] = useState(locationsData['Gujarat']['Ahmedabad']); 
    const [getDirectionURL, setGetDirectionURL] = useState('');
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
        if (isOpen2) setIsOpen2(false);
    };

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setIsOpen1(false);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
        if (isOpen1) setIsOpen1(false);
    };

    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        setIsOpen2(false);
    };

    const updateSelectedLocationContent = () => {
        if (locationsData[selectedOption1] && locationsData[selectedOption1][selectedOption2]) {
            const selectedLocation = locationsData[selectedOption1][selectedOption2];
            setSelectedLocationContent(selectedLocation);

            const url = `https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.destinationLat},${selectedLocation.destinationLng}`;
            setGetDirectionURL(url);
        } else {
            setSelectedLocationContent({
                content1: "Invalid Selection",
                address: "Invalid Selection",
                mapLocation: "Invalid Selection",
                phone: "Invalid Selection",
                hours: "Invalid Selection",
            });
            setGetDirectionURL('');
        }
    };

    const handleSearch = () => {
        updateSelectedLocationContent();
    };

    const handleUseMyLocation = () => {
        window.open('https://www.google.com/maps/place/Crown+Decor+Private+Limited,+One42,+North+Tower,+Suite+401+-+403,+4th+Floor,+Ambli+-+Bopal+Rd,+B%2FH,+Ashok+Vatika,+Ahmedabad,+Gujarat+380058');
    };



    const storeRef = useRef("")
    let refs = useRef([]);
    useEffect(() => {
      setTimeout(() => {
      const ourText = new splitType(storeRef.current, { types: "chars" });
      const chars = ourText.chars;
      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
          rotate: "45deg",
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 2,
          rotate: "0deg",
          ease: "power4.out",
        }
      );
      }, 2300);
    }, []);
    const splitWords = (phrase) => {
      let body = [];
      phrase.split(" ").forEach((word, i) => {
        const letters = splitLetters(word);
        body.push(
          <p key={word + "_" + i} className="findStore_text_animation_wrapper">
            {letters}
          </p>
        );
      });
      return body;
    };
    const splitLetters = (word) => {
      let letters = [];
      word.split("").forEach((letter, i) => {
        letters.push(
          <span
            key={letter + "_" + i}
            ref={(el) => {
              refs.current.push(el);
            }}
          >
            {letter}
          </span>
        );
      });
      return letters;
    };



    return (
        <div className={styles.Map_section}>
            <div className={styles.map_section1}>
            <div className={styles.content_Text} ref={storeRef}>{splitWords("Royale Touché experience center near me")}</div>
                <div className={styles.option_section}>
                
                <div className={`${styles.select_menu} ${isOpen1 ? styles.active : ''}`} onClick={toggleDropdown1}>
                
                        <div className={styles.select_btn} onClick={toggleDropdown1}>
                            <div className={styles.sBtn_text}>{selectedOption1 || 'Select State'}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                <path d="M2 2L11 11L20 2" stroke="black" strokeWidth="3" />
                            </svg>
                        </div>
                        <ul className={styles.options}>
                            {options1.map((option, index) => (
                                <li
                                    key={index}
                                    className={styles.option}
                                    onClick={() => handleOptionClick1(option)}
                                >
                                    <span className={styles.option_text}>{option}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                 
                    <div className={`${styles.select_menu} ${isOpen2 ? styles.active : ''}`} onClick={toggleDropdown2}>
                    
                        <div className={styles.select_btn} onClick={toggleDropdown2}>
                            <div className={styles.sBtn_text}>{selectedOption2 || 'Select City'}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                                <path d="M2 2L11 11L20 2" stroke="black" strokeWidth="3" />
                            </svg>
                        </div>
                        <ul className={styles.options}>
                            {options2.map((option, index) => (
                                <li
                                    key={index}
                                    className={styles.option}
                                    onClick={() => handleOptionClick2(option)}
                                ><span className={styles.option_text}>{option}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className={styles.search_button} onClick={handleSearch}>Search</button>
                </div>
                <p className={styles.location}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span onClick={handleUseMyLocation} className={styles.use_my_location}>  Use my location</span>
                </p>
            </div>
            <div className={styles.map_section2}>
                <div className={styles.content30}>
                    <div>
                        <p className={styles.content_1}>{selectedLocationContent.content1}</p>
                        <div className={styles.main_content}>
                        <div className={styles.content}>
                                <FontAwesomeIcon icon={faLocationDot} className={styles.allsvg} />
                                <div className={styles.address}>{selectedLocationContent.address}</div>
                            </div>
                            <div className={styles.content}>
                                <FontAwesomeIcon icon={faMapPin} className={styles.allsvg} />
                                <div className={styles.address}>{selectedLocationContent.mapLocation}</div>
                            </div>
                            <div className={styles.content}>
                                <FontAwesomeIcon icon={faPhoneVolume} className={styles.allsvg} />
                                <div className={styles.address}>{selectedLocationContent.phone}</div>
                            </div>
                            <div className={styles.content}>
                                <FontAwesomeIcon icon={faClock} className={styles.allsvg} />
                                <div className={styles.address}>{selectedLocationContent.hours}</div>
                            </div>
                        </div>
                        <div className={styles.content_buttons}>
                            {getDirectionURL && (
                                <button className={styles.content_button} onClick={() => window.open(getDirectionURL, '_blank')}>
                                    Get Direction
                                </button>
                            )}
                        </div>
                        <div className={styles.content_border}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="371" height="2" viewBox="0 0 371 2" fill="none">
                                <path d="M0.5 1H371" stroke="#CFB071" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className={styles.content_1}>{selectedLocationContent.content1}</p>
                        <div className={styles.main_content}>
                        <div className={styles.content}>
                                <FontAwesomeIcon icon={faLocationDot} className={styles.allsvg} />
                                <div className={styles.address}>{selectedLocationContent.address}</div>
                            </div>
                            <div className={styles.content}>
                                <FontAwesomeIcon icon={faMapPin} className={styles.allsvg} />
                                <div className={styles.address}>{selectedLocationContent.mapLocation}</div>
                            </div>
                            <div className={styles.content}>
                                <FontAwesomeIcon icon={faPhoneVolume} className={styles.allsvg} />
                                <div className={styles.address}>{selectedLocationContent.phone}</div>
                            </div>
                            <div className={styles.content}>
                                <FontAwesomeIcon icon={faClock} className={styles.allsvg} />
                                <div className={styles.address}>{selectedLocationContent.hours}</div>
                            </div>
                        </div>
                        <div className={styles.content_buttons}>
                        
                            {getDirectionURL && (
                                <button className={styles.content_button} onClick={() => window.open(getDirectionURL, '_blank')}>
                                    Get Direction
                                </button>
                            )}
                        </div>
                        <div className={styles.content_border}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="371" height="2" viewBox="0 0 371 2" fill="none">
                                <path d="M0.5 1H371" stroke="#CFB071" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.content70}>

                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.425164494458!2d72.5118402758819!3d23.044869315494672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b51fe5be8d9%3A0x1c4999478aa4081a!2sRoyale%20Touche%20Laminates%20and%20Wooden%20Floors%20-%20Ahmedabad!5e0!3m2!1sen!2sin!4v1699507206577!5m2!1sen!2sin" width="100%" height="720"  allowfullscreen="" className={styles.map_frame} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>
            </div>
        </div>
    );
}

export default Mapsection;
