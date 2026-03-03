import { createBrowserRouter, Navigate } from 'react-router';
import { PresentationLayout } from './components/presentation/PresentationLayout';
import { Slide01Cover } from './components/presentation/slides/Slide01Cover';
import { Slide02Diagnostic } from './components/presentation/slides/Slide02Diagnostic';
import { Slide03Flow } from './components/presentation/slides/Slide03Flow';
import { Slide04Engineering } from './components/presentation/slides/Slide04Engineering';
import { Slide05FinancialImpact } from './components/presentation/slides/Slide05FinancialImpact';
import { Slide06Risks } from './components/presentation/slides/Slide06Risks';
import { Slide07Resolution } from './components/presentation/slides/Slide07Resolution';
import { Slide08Quantified } from './components/presentation/slides/Slide08Quantified';
import { Slide09Calculator } from './components/presentation/slides/Slide09Calculator';
import { Slide10KPIs } from './components/presentation/slides/Slide10KPIs';
import { Slide11Value } from './components/presentation/slides/Slide11Value';
import { Slide12Technology } from './components/presentation/slides/Slide12Technology';
import { Slide13Advantage } from './components/presentation/slides/Slide13Advantage';
import { Slide14Decision } from './components/presentation/slides/Slide14Decision';
import { Slide15Pilot } from './components/presentation/slides/Slide15Pilot';
import { Slide16ROI } from './components/presentation/slides/Slide16ROI';
import { Slide17Differential } from './components/presentation/slides/Slide17Differential';
import { Slide18Business } from './components/presentation/slides/Slide18Business';
import { Slide19Services } from './components/presentation/slides/Slide19Services';
import { Slide20Start } from './components/presentation/slides/Slide20Start';
import { Slide21Closing } from './components/presentation/slides/Slide21Closing';

const TOTAL_SLIDES = 21;

const slides = [
  Slide01Cover,
  Slide02Diagnostic,
  Slide03Flow,
  Slide04Engineering,
  Slide05FinancialImpact,
  Slide06Risks,
  Slide07Resolution,
  Slide08Quantified,
  Slide09Calculator,
  Slide10KPIs,
  Slide11Value,
  Slide12Technology,
  Slide13Advantage,
  Slide14Decision,
  Slide15Pilot,
  Slide16ROI,
  Slide17Differential,
  Slide18Business,
  Slide19Services,
  Slide20Start,
  Slide21Closing,
];

function SlideWrapper() {
  return (
    <PresentationLayout totalSlides={TOTAL_SLIDES}>
      <SlideContent />
    </PresentationLayout>
  );
}

function SlideContent() {
  const slideId = parseInt(window.location.pathname.split('/').pop() || '1', 10);
  const SlideComponent = slides[slideId - 1] || Slide01Cover;
  return <SlideComponent />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/slide/1" replace />,
  },
  {
    path: '/slide/:slideId',
    element: <SlideWrapper />,
  },
  {
    path: '*',
    element: <Navigate to="/slide/1" replace />,
  },
]);
