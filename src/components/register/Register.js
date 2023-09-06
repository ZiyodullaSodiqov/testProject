import React, {useState} from 'react'
import Nav from "../nav/Nav";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Language} from "../../lang/languageConfig";
import {theme} from "antd";

    export default function Register(){

        const handleSubmit = (e) => {
            // Prevent the default submit and page reload
            e.preventDefault();

            axios
                .post("http://localhost:5000/api/reg/create", {
                    name: nameValue,
                    lastName: lastNameValue,
                    Birthdate: BirthdateValue,
                    phone_number: phoneNumberValue,
                    passportId: passportIdValue,
                    region: regionValue,
                    address: addressValue,
                    zip_code: zip_codeValue,
                    university: universityValue,
                    start_university: start_universityValue,
                    graduation_yearUniversity: GraduationValue,
                    work_exprience: work_exprienceValue,
                    exprience_year: exprience_yearValue,
                    letter: letterValue,
                    gender: genderValue,
                    jshr: jshrValue,
                    university_degree: unvrDegreeValue,
                    university_direction: unvrDirection,
                    hwo_worked: whoWorked,
                })
                .then((response) => {
                    console.log(response);
                    // Handle response
                    toast.success(Language.words.Uz.save, {
                        position: toast.POSITION.TOP_RIGHT,
                    });

                    window.location.href = '/success';
                });
        };

        const [nameValue, setName] = useState("");
        const [lastNameValue, setlastName] = useState("");
        const [BirthdateValue, setBirthdate] = useState("");
        const [phoneNumberValue, setPhoneNumber] = useState("");
        const [passportIdValue, setPassportId] = useState("");
        const [regionValue, setRegion] = useState("");
        const [addressValue, setAddressvalue] = useState("");
        const [zip_codeValue, setZipCode] = useState("");
        const [universityValue, setuniversity] = useState();
        const [start_universityValue, setStart_university] = useState("");
        const [GraduationValue, setGraduation] = useState("");
        const [work_exprienceValue, setwork_exprience] = useState("");
        const [exprience_yearValue, setexprience_year] = useState("");
        const [letterValue, setLetter] = useState("");
        const [genderValue, setgender] = useState("");
        const [jshrValue, setjshr] = useState("");
        const [unvrDegreeValue, setDegree] = useState("");
        const [unvrDirection, setDirection] = useState("");
        const [whoWorked, setWorked] = useState("");

        const {
            token: { colorBgContainer },
        } = theme.useToken();




        return(
            <React.Fragment>
                <ToastContainer />
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-4 site-SingUp-bg"></div>

                        <div className="col site-SingUp-col">

                            <h3 className={'site-SingUp-h3'}>
                                Shaxsiy ma'lumotlar
                            </h3>

                            <input
                                type="text"
                                placeholder={'Ismingiz'}
                                className="site-SingUp-input"
                                value={nameValue}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder={'Familiyangiz'}
                                className={'site-SingUp-input'}
                                value={lastNameValue}
                                onChange={(e) => setlastName(e.target.value)}
                            />

                            <input
                                type={'date'}
                                value={BirthdateValue}
                                onChange={(e) => setBirthdate(e.target.value)}
                                className="site-SingUp-input"
                            />

                            <select
                                className="site-SingUp-input"
                                aria-label="Default select example"
                                value={genderValue}
                                onChange={(e) => setgender(e.target.value)}>
                                <option value="Jinsingiz">Jinsingiz</option>
                                <option value="Ayol">Ayol</option>
                                <option value="Erkak">Erkak</option>
                            </select>

                            <input
                                type="text"
                                placeholder={'Telefon raqamingiz'}
                                className={'site-SingUp-input'}
                                value={phoneNumberValue}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />

                            <input
                                type="file"
                                className={'site-SingUp-input'}
                            />

                            <input
                                type="text"
                                placeholder={'Passport | ID karta seriya raqami'}
                                className={'site-SingUp-input'}
                                value={passportIdValue}
                                onChange={(e) => setPassportId(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder={'JSHR'}
                                min={14} max={14}
                                className={'site-SingUp-input'}
                                value={jshrValue}
                                onChange={(e) => setjshr(e.target.value)}
                            />

                            <h3 className={'site-SingUp-h3'}>
                                Turar Joy malumotlar
                            </h3>


                            <select
                                className="site-SingUp-input"
                                value={regionValue}
                                aria-label="Default select example"
                                onChange={(e) => setRegion(e.target.value)}>
                                <option value="Viloyat">Viloyat</option>
                                <option value="Andijon">Andijon viloyati</option>
                                <option value="Buxoro">Buxoro viloyati</option>
                                <option value="Farg'ona">Farg'ona viloyati</option>
                                <option value="Jizzax">Jizzax viloyati</option>
                                <option value="Qoraqalpog'iston (avtonom respublika)">Qoraqalpog'iston (avtonom respublika)</option>
                                <option value="Namangan">Namangan viloyati</option>
                                <option value="Navoiy">Navoiy viloyati</option>
                                <option value="Qashqadaryo">Qashqadaryo viloyati</option>
                                <option value="Samarqand">Samarqand viloyati</option>
                                <option value="Sirdaryo">Sirdaryo viloyati</option>
                                <option value="Surxondaryo">Surxondaryo viloyati</option>
                                <option value="Toshkent">Toshkent viloyati</option>
                                <option value="Toshkent shahri (poytaxt)">Toshkent shahri (poytaxt)</option>
                                <option value="Xorazm">Xorazm viloyati</option>
                            </select>

                            <input
                                type="text"
                                placeholder={'Manzil'}
                                value={addressValue}
                                onChange={(e) => setAddressvalue(e.target.value)}
                                className={'site-SingUp-input'}
                            />

                            <input
                                type="text"
                                placeholder={'Zip kod'}
                                className="site-SingUp-input"
                                value={zip_codeValue}
                                onChange={(e) => setZipCode(e.target.value)}
                            />

                            <h3 className={'site-SingUp-h3'}>
                                Oliy ta`lim
                            </h3>

                            <select
                                className="site-SingUp-input"
                                aria-label="Default select example"
                                value={unvrDegreeValue}
                                onChange={(e) => setDegree(e.target.value)}>
                                <option value="Daraja">Daraja</option>
                                <option value="Bakalavr">Bakalavr</option>
                                <option value="Magistr">Magistr</option>
                                <option value="Doktorlik">Doktorlik</option>
                                <option value="Dotsent">Dotsent</option>
                                <option value="Kasbiy daraja">Kasbiy daraja</option>
                                <option value="Sertifikat">Sertifikat</option>
                            </select>

                            <input
                                type="text"
                                placeholder={'Yo`nalish'} min={4}
                                className="site-SingUp-input"
                                value={unvrDirection}
                                onChange={(e) => setDirection(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder={'Universitet nomi'}
                                min={4}
                                className="site-SingUp-input"
                                value={universityValue}
                                onChange={(e) => setuniversity(e.target.value)}
                            />

                            <input
                                type="date"
                                placeholder={'Universitetni boshlagan yili'}
                                className={'site-SingUp-input'}
                                value={start_universityValue}
                                onChange={(e) => setStart_university(e.target.value)}
                            />

                            <input
                                type="date"
                                placeholder={'Universitetni tugatgan  yili'}
                                className="site-SingUp-input"
                                value={GraduationValue}
                                onChange={(e) => setGraduation(e.target.value)}
                            />

                            <h3 className={'site-SingUp-h3'}>
                                Ish tajribangiz
                            </h3>

                            <input
                                type="text"
                                placeholder={'Ish joyingiz'}
                                className="site-SingUp-input"
                                value={work_exprienceValue}
                                onChange={(e) => setwork_exprience(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder={'Kim bo`lib ishlagansiz'}
                                className={'site-SingUp-input'}
                                value={whoWorked}
                                onChange={(e) => setWorked(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder={'Tajribangiz'}
                                min={2}
                                value={exprience_yearValue}
                                onChange={(e) => setexprience_year(e.target.value)}
                                className={'site-SingUp-input'}
                            />

                            <h3 className={'site-SingUp-h3'}>
                                Xat
                            </h3>

                            <textarea
                                className="site-SingUp-input"
                                placeholder="Xatingiz"
                                id="floatingTextarea"
                                value={letterValue}
                                onChange={(e) => setLetter(e.target.value)}>

                            </textarea>

                            <Stack
                                direction="row"
                                spacing={2}>
                                <Button
                                    variant="contained"
                                    className={'site-SingUp-button'}
                                    endIcon={<SendIcon />}
                                    onClick={handleSubmit}>
                                    Yuborish
                                </Button>
                            </Stack>
                                <br/> <br/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }