import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProductionFacilities from './components/ProductionFacilities/ProductionFacilities';
import Certificates from './components/Certificates/Certificates';
import ProductCatalogue from './components/ProductCatalogue/ProductCatalogue';
import TechnologicalScheme from './components/TechnologicalScheme/TechnologicalScheme';
import TermsOfDelivery from './components/TermsOfDelivery/TermsOfDelivery';
import Feedback from './components/Feedback/Feedback';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<>
			<Hero />
			<About />
			<ProductionFacilities />
			<Certificates />
			<ProductCatalogue />
			<TechnologicalScheme />
			<TermsOfDelivery />
			<Feedback />
			<Contacts />
			<Footer />
		</>
	);
};

export default App;
