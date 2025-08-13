import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function IndianForm() {
    const [formData, setFormData] = useState({
        title_original: "",
        title_english: "",
        film_language: "",
        subtitles: "",
        director_name: "",
        film_type: "",
        is_first_or_second_feature: "",
        duration_minutes: "",
        year_of_production: "",
        country_of_origin: "",
        technical_features: "",
        origination_format: "",
        presentation_format: "",
        producer_name: "",
        producer_email: "",
        producer_mobile: "",
        screener_link: "",
        synopsis_long: "",
        synopsis_short: "",
        stills: "",
        director_photo: null,
        biography: "",
        cast_and_crew: "",
        producer_consent_name: "",
        correspondence_address: "",
        correspondence_email: "",
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
                `${import.meta.env.VITE_API_BASE_URL}/indian-form/`,
                formDataObj,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            toast.success("Form submitted successfully!");
            setFormData({
                title_original: "",
                title_english: "",
                film_language: "",
                subtitles: "",
                director_name: "",
                film_type: "",
                is_first_or_second_feature: "",
                duration_minutes: "",
                year_of_production: "",
                country_of_origin: "",
                technical_features: "",
                origination_format: "",
                presentation_format: "",
                producer_name: "",
                producer_email: "",
                producer_mobile: "",
                screener_link: "",
                synopsis_long: "",
                synopsis_short: "",
                stills: "",
                director_photo: "",
                biography: "",
                cast_and_crew: "",
                producer_consent_name: "",
                correspondence_address: "",
                correspondence_email: "",
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
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow">
                <div className="text-center mb-6">
                    <p className="text-sm font-semibold text-blue-500">
                        20th IFFT-Ms. Dorothea Machingal Film
Award 2025 For Best Debut in INDIAN
Cinema ( First or Second movie of a
Director)-1,00,000/,Prize money
                    </p>
                </div>

                {/* QR Code for Payment */}
                <div className="text-center mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Submission Fee Payment</h3>
                    <p className="text-sm mb-4">Please pay the submission fee of ₹5000/- (for Indian entries) or $10 (for international entries)</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div>
                            <p className="font-medium mb-2">For Indian Payments:</p>
                            <img
                                src="/images/indian-payment-qr.png"
                                alt="Indian Payment QR Code"
                                className="mx-auto w-48 h-48 border p-2 bg-white"
                            />
                            <p className="text-sm mt-2">UPI ID: ifft@examplebank</p>
                        </div>
                        <div>
                            <p className="font-medium mb-2">For International Payments:</p>
                            <img
                                src="/images/international-payment-qr.png"
                                alt="International Payment QR Code"
                                className="mx-auto w-48 h-48 border p-2 bg-white"
                            />
                            <p className="text-sm mt-2">PayPal: payments@ifft.org</p>
                        </div>
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
                                1.4 Subtitles (if any)
                            </label>
                            <input
                                type="text"
                                name="subtitles"
                                value={formData.subtitles}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                1.5 Director's Name
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
                                1.6 Type of Film (Fiction/Non-Fiction/Experimental/Animation)
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
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Experimental">Experimental</option>
                                <option value="Animation">Animation</option>
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
                                <option value="First">First Feature Film</option>
                                <option value="Second">Second Feature Film</option>
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
                                1.12 Origination Format (Digital/16mm/35mm/Other)
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
                                1.13 Presentation Format (DCP/Blu-ray/Other)
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
                        <h3 className="font-bold text-lg mb-4">2. Producer Details</h3>

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
                                2.4 Screener Link (Vimeo/YouTube/Google Drive with password if any)
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
                                3.3 Stills from the Film (Enter Drive <Link:manifest></Link:manifest> with Access)
                            </label>
                            <input
                                type="text"
                                name="stills"
                                value={formData.stills}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                3.4 Director's Photo (High resolution)
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
                                3.5 Director's Biography (200 words max)
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
                                3.6 Cast and Crew List
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
                    </div>

                    {/* Section 4: Declaration */}
                    <div className="border-b pb-4">
                        <h3 className="font-bold text-lg mb-4">4. Declaration</h3>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                4.1 Producer's Consent Name
                            </label>
                            <input
                                type="text"
                                name="producer_consent_name"
                                value={formData.producer_consent_name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-normal mb-1">
                                4.2 Correspondence Address
                            </label>
                            <textarea
                                name="correspondence_address"
                                value={formData.correspondence_address}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                rows="3"
                                required
                            ></textarea>
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
                                4.4 Documentation (Upload any supporting documents in PDF format <sup>*Below 5 mb</sup>)
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
                                4.5 Signature (Upload scanned signature <sup>*Below 5 mb</sup>)
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

                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default IndianForm;