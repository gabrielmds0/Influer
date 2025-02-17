import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Pricing.css'

export default function Pricing() {
  return (
    <section className="pricing-page" id='pricing-page'>
      <div className="pricing" id='pricing'>
      <div className="gradient-overlay"></div>
      <div className='card-container'>
        <div className='card-1'>
          <div className='card-type'>Basic</div>
          <h1 className='card-price'>R$50</h1>
          <h3 className='month'>/Mês</h3>
          <div className="list">
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>

            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faXmark} className="icon" />

              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faXmark} className="icon" />

              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faXmark} className="icon" />

              <span>Lorem impsum dolor sit.</span>
            </div>
          </div>
          <button type='button' className='card-btn'>Assinar</button>
          <div className='card-bottom'>Assine Agora!</div>
        </div>

        <div className='card-2'>
          <div className='card-type'>Pro</div>
          <h1 className='card-price'>R$80</h1>
          <h3 className='month'>/Mês</h3>
          <div className="list">
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faXmark} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
            <FontAwesomeIcon icon={faXmark} className="icon" />
            <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faXmark} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
          </div>
          <button type='button' className='card-btn'>Assinar</button>
          <div className='card-bottom'>Assine Agora</div>
        </div>

        <div className='card-3'>
          <div className='card-type'>Premium</div>
          <h1 className='card-price'>R$100</h1>
          <h3 className='month'>/Mês</h3>
          <div className="list">
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>

            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCheck} className="icon" />
              <span>Lorem impsum dolor sit.</span>
            </div>
          </div>
          <button type='button' className='card-btn'>Assinar</button>

          <div className='card-bottom'>Assine Agora</div>

        </div>
      </div>
      </div>
    </section>
  );
}