import './App.css';
import TypeSection from './components/TypeSection.js';
import FormSection from './components/FormSection.js';

function App() {
    return (
        <div className="mainApp">
            <div className="typeSelection">
                <TypeSection type="Single" active />
                <TypeSection type="Partner" />
            </div>
            <FormSection />
        </div>
    );
}

export default App;
