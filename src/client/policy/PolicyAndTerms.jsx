import React from 'react'

function PolicyAndTerms() {
    return (
        <>
            <section className="w-full bg-gray-50 min-h-screen pt-32 md:pb-12 pb-12 px-4 md:px-8 flex items-center justify-center">
            <div className="max-w-5xl w-full space-y-12">

                {/* Privacy Policy */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                    <p className="text-gray-700 mb-4">
                        The International Film Festival of Thrissur (IFFT) is committed to protecting the privacy of all individuals involved in the festival, including filmmakers, patrons, and attendees. We collect only the necessary information required for submissions, registrations, and communications.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Personal data such as name, email, and film details are securely stored and will never be shared with third parties without consent. This data is used solely for festival operations and communication purposes.
                    </p>
                    <p className="text-gray-700">
                        By using our website and submitting entries, you consent to our data collection practices as outlined here. For any questions regarding data use, please contact us directly.
                    </p>
                </div>

                {/* Terms and Conditions */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>
                    <p className="text-gray-700 mb-4">
                        Participation in the International Film Festival of Thrissur is open to all eligible entries under the specified categories. All submitted films must comply with copyright laws and be the original work of the applicant.
                    </p>
                    <p className="text-gray-700 mb-4">
                        The festival reserves the right to reject any submission that does not meet the guidelines. Submission fees, if applicable, are non-refundable. Selected films may be screened publicly during the festival and used in promotional materials with due credit.
                    </p>
                    <p className="text-gray-700">
                        By submitting a film, the participant agrees to these terms and grants IFFT the necessary rights for screening and promotion.
                    </p>
                </div>

            </div>
        </section>
        </>
    )
}

export default PolicyAndTerms