import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import qr from '../../../assets/Qr/qrcode.jpeg'
import qricon from '../../../assets/Qr/qr-icon.png'

function MalayalamForm() {
    const [formData, setFormData] = useState({
        title_original: "",
        title_english: "",
        film_language: "",
        subtitles: "",
        film_type: "",
        is_first_or_second_feature: "",
        duration_minutes: "",
        year_of_production: "",
        country_of_origin: "",
        technical_features: "",
        origination_format: "",
        presentation_format: "DCP",
        producer_name: "",
        producer_email: "",
        producer_mobile: "",
        director_name: "",
        director_email: "",
        director_mobile: "",
        biography: "",
        screener_link: "",
        screener_link_password: "NO",
        synopsis_long: "",
        synopsis_short: "",
        stills_link: "",
        cast_and_crew: "",
        name_of_submitter: "",
        correspondence_contact: "",
        correspondence_email: "",
        film_poster: null,
        director_photo: null,
        producer_consent: null,
        documentation: null,
        signature: null,
        screenshot: null,
    });

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files && files[0]) {
            if (files[0].size > MAX_FILE_SIZE) {
                toast.error(`${name} file must be less than 5MB`);
                return;
            }
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check all fields filled
        for (const key in formData) {
            if (!formData[key]) {
                toast.error(`Please fill in ${key.replace(/_/g, " ")}`);
                return;
            }
        }

        try {
            const formDataObj = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataObj.append(key, value);
            });

            await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/malayalam-form/`,
                formDataObj,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            toast.success("Form submitted successfully!");
            setFormData({
                title_original: "",
                title_english: "",
                film_language: "",
                subtitles: "",
                film_type: "",
                is_first_or_second_feature: "",
                duration_minutes: "",
                year_of_production: "",
                country_of_origin: "",
                technical_features: "",
                origination_format: "",
                presentation_format: "DCP",
                producer_name: "",
                producer_email: "",
                producer_mobile: "",
                director_name: "",
                director_email: "",
                director_mobile: "",
                biography: "",
                screener_link: "",
                screener_link_password: "NO",
                synopsis_long: "",
                synopsis_short: "",
                stills_link: "",
                cast_and_crew: "",
                name_of_submitter: "",
                correspondence_contact: "",
                correspondence_email: "",
                film_poster: null,
                director_photo: null,
                producer_consent: null,
                documentation: null,
                signature: null,
                screenshot: null,
            });
        } catch (err) {
            toast.error("Error submitting form!");
            console.error(err);
        }
    };


    return (
        <section className="bg-gray-100 min-h-screen py-16 md:py-32">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="max-w-6xl mx-auto bg-white px-2 py-6 rounded-lg shadow">
                <div className="text-center mb-6">
                    <p className="text-lg font-semibold text-blue-500">
                        IFFT- Film Award 2025 For Best Debut in
                        Malayalam Cinema ( First or Second
                        movie of a Director) - 1,00,000/-Prize
                        money
                    </p>
                </div>

                {/* QR Code for Payment */}
                <div className="text-center mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Submission Fee Payment</h3>
                    <p className="text-base mb-4">Please pay the submission fee of ₹5000/</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div>
                            <p className="font-medium text-gray-500 mb-2">Click to download</p>

                            <a href={qr} download="upi-qr.png">
                                <img
                                    src={qricon}
                                    alt="Indian Payment QR Code"
                                    className="mx-auto w-48 h-48 border p-2 bg-white cursor-pointer"
                                />
                            </a>

                            <p className="text-sm mt-2">UPI ID: 9496168654@cnrb</p>
                        </div>

                        {/* <div>
                            <p className="font-medium mb-2">For International Payments:</p>
                            <img
                                src="/images/international-payment-qr.png"
                                alt="International Payment QR Code"
                                className="mx-auto w-48 h-48 border p-2 bg-white"
                            />
                            <p className="text-sm mt-2">PayPal: payments@ifft.org</p>
                        </div> */}
                    </div>
                    <p className="text-sm mt-4 text-red-500">* Please upload the payment screenshot in the form below</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Section 1: Film Details */}
                    <div className="border-b pb-4">
                        <h3 className="font-bold text-lg mb-4">1. Film Details</h3>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.1 Title of Film (in original language)
                            </label>
                            <input
                                type="text"
                                name="title_original"
                                value={formData.title_original}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.2 Title of Film (in English)
                            </label>
                            <input
                                type="text"
                                name="title_english"
                                value={formData.title_english}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.3 Language(s) of Film
                            </label>
                            <input
                                type="text"
                                name="film_language"
                                value={formData.film_language}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.4 Subtitles English
                            </label>

                            <div className="flex items-center gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="subtitles"
                                        value="Yes"
                                        checked={formData.subtitles === "Yes"}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>

                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="subtitles"
                                        value="No"
                                        checked={formData.subtitles === "No"}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>


                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.6 Type of Film (Fiction/Experimental/Other)
                            </label>
                            <select
                                name="film_type"
                                value={formData.film_type}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            >
                                <option value="" disabled>Select</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Experimental">Experimental</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Short Film">Short Film</option>
                                <option value="Feature Film">Feature Film</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.7 Is this your first or second feature film?
                            </label>
                            <select
                                name="is_first_or_second_feature"
                                value={formData.is_first_or_second_feature}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            >
                                <option value="" disabled>Select</option>
                                <option value="First">First Film</option>
                                <option value="Second">Second Film</option>
                                <option value="Second">No</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.8 Duration (in minutes)
                            </label>
                            <input
                                type="number"
                                name="duration_minutes"
                                value={formData.duration_minutes}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.9 Year of Production
                            </label>
                            <input
                                type="number"
                                name="year_of_production"
                                value={formData.year_of_production}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.10 Country of Origin
                            </label>
                            <input
                                type="text"
                                name="country_of_origin"
                                value={formData.country_of_origin}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.11 Technical Features (Color/B&W, Sound format, Aspect ratio)
                            </label>
                            <textarea
                                name="technical_features"
                                value={formData.technical_features}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.12 Origination Format (Digital/Other)
                            </label>
                            <input
                                type="text"
                                name="origination_format"
                                value={formData.origination_format}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.13 Presentation Format (DCP Only allowed)
                            </label>
                            <input
                                type="text"
                                name="presentation_format"
                                value={formData.presentation_format}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* Section 2: Producer Details */}
                    <div className="border-b pb-4">
                        <h3 className="font-bold text-lg mb-4">2. Producer/Director Details</h3>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.1 Producer's Name
                            </label>
                            <input
                                type="text"
                                name="producer_name"
                                value={formData.producer_name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.2 Producer's Email
                            </label>
                            <input
                                type="email"
                                name="producer_email"
                                value={formData.producer_email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.3 Producer's Mobile Number
                            </label>
                            <input
                                type="tel"
                                name="producer_mobile"
                                value={formData.producer_mobile}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.4 Director's Name
                            </label>
                            <input
                                type="text"
                                name="director_name"
                                value={formData.director_name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.5 Director's Email
                            </label>
                            <input
                                type="email"
                                name="director_email"
                                value={formData.director_email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.6 Director's Mobile Number
                            </label>
                            <input
                                type="tel"
                                name="director_mobile"
                                value={formData.director_mobile}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.7 Director's Photo (High Quality * <sup>Below 5 mb</sup> )
                            </label>
                            <input
                                type="file"
                                name="director_photo"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.8 Director's Biography (200 words max)
                            </label>
                            <textarea
                                name="biography"
                                value={formData.biography}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.9 Screener Link (Vimeo/YouTube/Other - <sup>*Please make sure enter url/Link</sup> )
                            </label>
                            <input
                                type="url"
                                name="screener_link"
                                value={formData.screener_link}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                2.9 Screener Link Password <span className="text-gray-500">(If none, will be set to "NO")</span>
                            </label>
                            <input
                                type="text"
                                name="screener_link_password"
                                value={formData.screener_link_password}
                                placeholder="Enter password (leave empty if none)"
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                        </div>

                    </div>

                    {/* Section 3: Film Information */}
                    <div className="border-b pb-4">
                        <h3 className="font-bold text-lg mb-4">3. Film Information</h3>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                3.1 Synopsis (Long, 300 words max)
                            </label>
                            <textarea
                                name="synopsis_long"
                                value={formData.synopsis_long}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                3.2 Synopsis (Short, 100 words max)
                            </label>
                            <textarea
                                name="synopsis_short"
                                value={formData.synopsis_short}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                3.3 Stills from the Film (Enter Google Drive Link with Access <sup>*Please make sure enter url/Link</sup>)
                            </label>
                            <input
                                type="url"
                                name="stills_link"
                                value={formData.stills_link}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>



                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                3.4 Cast and Crew List
                            </label>
                            <textarea
                                name="cast_and_crew"
                                value={formData.cast_and_crew}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                3.5 Film Poster (High Quality - <sup>* Below 5 MB</sup> )
                            </label>
                            <input
                                type="file"
                                name="film_poster"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* Section 4: Declaration */}
                    <div className="border-b pb-4">
                        <h3 className="font-bold text-lg mb-1">4. Declaration</h3>
                        <small className="text-gray-600">20th IFFT - is organized and hosted by THRISSUR-JANASAMSKARA-CHALACHITRA KENDRAM is a charitable,cultural and educational organization devoted to celebrating excellence in film and the moving image.  I ACCEPT RESPONSIBILITY for the accuracy of the information supplied in sections and I authorize the Festival to reproduce company contact information in its publications exactly as supplied below.personal information supplied in the application solely to facilitate management and administration of its activities and responsibilities as it relates to the film being submitted. IFFT - safeguards this personal information against loss, theft and unauthorized access or disclosure. By supplying this personal information you consent to its use

                            <br />
                            <a
                                href="/MALAYALAM DEBUT FILMS.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                View Rules & Regulations (PDF)
                            </a>
                        </small>
                        <div className="mb-4 mt-3">
                            <label className="block font-normal mb-1">
                                4.1 Name of Submitter
                            </label>
                            <input
                                type="text"
                                name="name_of_submitter"
                                value={formData.name_of_submitter}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                4.2 Correspondence Contact Number
                            </label>
                            <input
                                type="tel"
                                name="correspondence_contact"
                                value={formData.correspondence_contact}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                4.3 Correspondence Email
                            </label>
                            <input
                                type="email"
                                name="correspondence_email"
                                value={formData.correspondence_email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                4.4 producers consent ( <sup>*Below 5 mb</sup>  )
                            </label>
                            <input
                                type="file"
                                name="producer_consent"
                                accept="application/pdf,image/*"
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                4.5 Documentation (Upload any supporting documents in PDF format <sup>*Below 5 mb</sup>)
                            </label>
                            <input
                                type="file"
                                name="documentation"
                                accept="application/pdf,image/*"
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                4.6 Signature (Upload scanned signature <sup>*Below 5 mb</sup>)
                            </label>
                            <input
                                type="file"
                                name="signature"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* Payment Verification */}
                    <div className="pb-4">
                        <h3 className="font-bold text-lg mb-4">5. Payment Verification</h3>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                5.1 Payment Screenshot (Upload payment confirmation screenshot <sup>*Below 5 mb</sup> )
                            </label>
                            <input
                                type="file"
                                name="screenshot"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>
                    </div>
                    <p className="text-sm mt-4 text-orange-600">
                        * Note: Please ensure all fields are filled and each file/image is under 5MB.
                    </p>


                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default MalayalamForm;