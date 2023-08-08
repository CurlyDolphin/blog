import { createRoot } from 'react-dom/client';
import {Counter} from "./Counter";


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Counter />);