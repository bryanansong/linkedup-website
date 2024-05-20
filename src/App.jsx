import { useState } from "react";
import "./App.css";
import cardInfo from "./constants";
import FlashCard from "./components/FlashCard";

function App() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const handleForward = () => {
		if (currentIndex < cardInfo.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<>
			<img
				src="https://github.com/bryanansong/linkedup/blob/main/src/assets/Logo.png?raw=true"
				alt="LinkedUp Logo"
				className="logo"
			/>
			<h1>Privacy Policy for LinkedUp</h1>

			<h2>Effective Date: 5 / 20 / 2024</h2>
			<p>
				LinkedUp ("we", "our", or "us") respects your privacy and is
				committed to protecting your personal data. This privacy policy will
				inform you about how we look after your personal data when you use
				our LinkedIn profile management Chrome extension ("Extension") and
				tell you about your privacy rights and how the law protects you.
				<h2>1. Information We Collect</h2>
				We may collect and process the following data about you: ###
				Information You Provide - **Profile Data**: When you save a LinkedIn
				profile using the Extension, we collect and store the name, profile
				URL, and image URL of the LinkedIn profile. ### Automatically
				Collected Information - **Usage Data**: We collect information about
				how you use our Extension, such as the features you use and the
				actions you take.
				<h2>2. How We Use Your Information</h2>
				We use your information for the following purposes: - **Profile
				Management**: To save, manage, and display LinkedIn profiles that you
				choose to save. - **Sync Across Devices**: To ensure your saved
				profiles are accessible across different devices using Chrome
				storage. <h2>3. How We Share Your Information</h2>
				We do not share, sell, or otherwise disclose your personal data to
				third parties, except as follows: - **Compliance with Laws**: We may
				disclose your information where required to comply with applicable
				laws, regulations, or legal processes.
				<h2>4. Data Security</h2>
				We implement appropriate technical and organizational measures to
				protect your personal data from unauthorized access, use, or
				disclosure. However, please be aware that no security measures are
				perfect or impenetrable.
				<h2>5. Data Retention</h2>
				We retain your personal data for as long as you use the Extension and
				for a reasonable period thereafter. If you wish to delete your data,
				you can do so by removing the saved profiles manually within the
				Extension.
				<h2>6. Your Data Protection Rights</h2>
				Depending on your location, you may have the following rights
				regarding your personal data: - **Access**: You have the right to
				request copies of your personal data. - **Rectification**: You have
				the right to request that we correct any information you believe is
				inaccurate. - **Erasure**: You have the right to request that we
				erase your personal data, under certain conditions. - **Restriction
				of Processing**: You have the right to request that we restrict the
				processing of your personal data, under certain conditions. -
				**Objection to Processing**: You have the right to object to our
				processing of your personal data, under certain conditions. - **Data
				Portability**: You have the right to request that we transfer the
				data we have collected to another organization, or directly to you,
				under certain conditions.
				<h2>7. Changes to This Privacy Policy</h2>
				We may update this privacy policy from time to time. We will notify
				you of any changes by posting the new privacy policy on this page.
				You are advised to review this privacy policy periodically for any
				changes. Changes to this privacy policy are effective when they are
				posted on this page.
				<h2>8. Contact Us</h2>
				If you have any questions or concerns about this privacy policy,
				please contact us at: - **Email**: bryanansong2003@gmail.com By using
				the LinkedUp Extension, you acknowledge that you have read and
				understood this privacy policy. Thank you for trusting LinkedUp with
				your LinkedIn profile management needs.
			</p>

			<p className="read-the-docs">Powered By Bryan Ansong 🤹🏾‍♂️</p>
		</>
	);
}

export default App;
