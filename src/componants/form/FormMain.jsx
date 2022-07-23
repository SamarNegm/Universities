import React, { useState, useEffect } from 'react'
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
function FormMain({ univiersty, setUniviersty }) {
    const countries = ["Egypt", "US", "UK", "Sudan", "Banama"];
    const [validData, setValidData] = useState(false);
    useEffect(() => {

        console.log(univiersty)
        if (univiersty.name)
            console.log("ok")

    }, [univiersty])

    return (
        <div className="form-main">
            <div className="form-title">
                <p>Univiersty</p>
            </div>
            <div className="form-content">
                <p className="form-content-p1">
                    please fill data below to univiersty data
                </p>
                <div className="form-content-Choose-Category">
                    <label className="form-label">Choose Country</label>

                    <FormControl fullWidth>
                        <NativeSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={univiersty.country || ""}
                            label="selectedJob"
                            onChange={(e) => setUniviersty({ ...univiersty, country: e.target.value })}
                            defaultValue={10}
                            className="form-select"
                        >
                            <option value="">...</option>
                            {
                                countries.map((country, id) => {
                                    return (
                                        <option key={id} value={country}>
                                            {country}
                                        </option>
                                    );
                                })
                            }
                        </NativeSelect>
                    </FormControl>

                    <div className="form-label">
                        <label>Univiersty name</label>
                    </div>

                    <FormControl fullWidth>
                        <input
                            className="form-input"
                            value={univiersty.name}
                            onChange={(e) => setUniviersty({ ...univiersty, name: e.target.value })}
                        ></input>
                    </FormControl>
                    <div className="form-label">
                        <label>State Or Provinces</label>
                    </div>

                    <FormControl fullWidth>
                        <input
                            className="form-input"
                            value={univiersty.state_province}
                            onChange={(e) => setUniviersty({ ...univiersty, state_province: e.target.value })}
                        ></input>
                    </FormControl>


                    <div className="form-label">
                        <label> Alpha Two Code</label>
                    </div>

                    <FormControl fullWidth>
                        <input
                            className="form-input"
                            value={univiersty.alpha_two_code}

                            onChange={(e) => setUniviersty({ ...univiersty, alpha_two_code: e.target.value })}
                        ></input>
                    </FormControl>


                    <div className="form-label">
                        <label>Univiersty Domains</label>
                    </div>

                    <FormControl fullWidth>
                        <input
                            className="form-input"
                            value={univiersty.domains || ""}
                            onChange={(e) => setUniviersty({ ...univiersty, domains: e.target.value })}
                        ></input>
                    </FormControl>

                    <div className="form-submit-wrapper">
                        <div className={validData ? "form-submit form-submit-active" : "form-submit form-submit-disabled"}>Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormMain