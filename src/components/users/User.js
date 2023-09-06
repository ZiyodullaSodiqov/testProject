import axios from "axios";
import React, { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";
import pageRef from "react";
import { Language } from "../../lang/languageConfig";
import Search from "../search/Search";
import Nav from "../nav/Nav";

const User = () => {


  const handleButtonClick = () => {
    const element = pageRef.current;
    html2pdf().from(element).save("myPage.pdf");
  };

  const [dataN, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reg/all').then(function (response) {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Nav />
      <Search />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <br />
      <div className="container" style={{overflowX:"scroll", width:"2000px"}}>
        <button onClick={handleButtonClick} className="btn btn-success">
          {Language.words.Uz.download_pdf}
        </button>
        <br />
        <br />
        <div ref={pageRef}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">{Language.words.Uz.name}</th>
                <th scope="col">{Language.words.Uz.surName}</th>
                <th scope="col">{Language.words.Uz.borndate}</th>
                <th scope="col">Jinsi</th>
                <th scope="col">{Language.words.Uz.phoneNumber}</th>
                <th scope="col">{Language.words.Uz.passportID}</th>
                <th scope="col">JSHR</th>
                <th scope="col">{Language.words.Uz.region}</th>
                <th scope="col">{Language.words.Uz.address}</th>
                <th scope="col">{Language.words.Uz.zip_code}</th>
                <th scope="col">Daraja</th>
                <th scope="col">Yo`nalisj</th>
                <th scope="col">{Language.words.Uz.university}</th>
                <th scope="col">{Language.words.Uz.university_start}</th>
                <th scope="col">{Language.words.Uz.graduation_university}</th>
                <th scope="col">{Language.words.Uz.workText}</th>
                <th scope="col">Kim bo`lib ishlagan</th>
                <th scope="col">{Language.words.Uz.workYear}</th>
                <th scope="col">{Language.words.Uz.letter}</th>
              </tr>
            </thead>
            <tbody>
              {dataN?.value?.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.lastName}</td>
                  <td>{item.Birthdate}</td>
                  <td>{item.gender}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.passportId}</td>
                  <td>{item.jshr}</td>
                  <td>{item.region}</td>
                  <td>{item.address}</td>
                  <td>{item.zip_code}</td>
                  <td>{item.university_degree}</td>
                  <td>{item.university_direction}</td>
                  <td>{item.university}</td>
                  <td>{item.start_university}</td>
                  <td>{item.graduation_yearUniversity}</td>
                  <td>{item.work_exprience}</td>
                  <td>{item.hwo_worked}</td>
                  <td>{item.exprience_year + " yil"}</td>
                  <td>{item.letter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;
