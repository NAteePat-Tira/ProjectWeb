import React, { useState } from 'react';
import Filter from '../components/Monitoring/Filter';
import '../styles/monitoring.css';
import CameraFeed from '../components/Monitoring/Camera';
import ProductCard from '../components/Monitoring/ProductCard';

const Monitoring = () => {
  const [date, setDate] = useState('');
  const [product, setProduct] = useState('None');
  const [partNumber, setPartNumber] = useState('None');
  const [line, setLine] = useState('None');
  const [shift, setShift] = useState('None');
  const [process, setProcess] = useState('None');

  const handleDateChange = (e) => setDate(e.target.value);
  const handleProductChange = (e) => setProduct(e.target.value);
  const handlePartChange = (e) => setPartNumber(e.target.value);
  const handleLineChange = (e) => setLine(e.target.value);
  const handleShiftChange = (e) => setShift(e.target.value);
  const handleProcessChange = (e) => setProcess(e.target.value);

  const handleClearFilters = () => {
    setDate('');
    setProduct('None');
    setPartNumber('None');
    setLine('None');
    setShift('None');
    setProcess('None');
  };

 const productData = [
  {
    number: 1,
    pn: 'ZG 1234',
    line: 'A',
    ct: '3 Sec',
    time: '00:00:01',
    status: 'OK',
    videoId: '1ABC123DriveVideoID',
    processes: [
      { step: 1, time: '0.5 Sec' },
      { step: 2, time: '0.5 Sec' },
      { step: 3, time: '1 Sec' },
      { step: 4, time: '0.5 Sec' },
      { step: 5, time: '0.5 Sec' }
    ]
  },
  {
    number: 2,
    pn: 'ZG 5678',
    line: 'B',
    ct: '4 Sec',
    time: '00:00:03',
    status: 'NG',
    videoId: '1DEF456DriveVideoID',
    processes: [
      { step: 1, time: '1 Sec' },
      { step: 2, time: '1 Sec' },
      { step: 3, time: '1 Sec' },
      { step: 4, time: '0.5 Sec' },
      { step: 5, time: '0.5 Sec' }
    ]
  },
  {
    number: 3,
    pn: 'ZG 9101',
    line: 'C',
    ct: '2 Sec',
    time: '00:00:02',
    status: 'OK',
    videoId: '1GHI789DriveVideoID',
    processes: [
      { step: 1, time: '0.3 Sec' },
      { step: 2, time: '0.4 Sec' },
      { step: 3, time: '0.6 Sec' },
      { step: 4, time: '0.4 Sec' },
      { step: 5, time: '0.3 Sec' }
    ]
  },
  {
    number: 4,
    pn: 'ZG 1122',
    line: 'A',
    ct: '5 Sec',
    time: '00:00:04',
    status: 'OK',
    videoId: '1JKL012DriveVideoID',
    processes: [
      { step: 1, time: '1 Sec' },
      { step: 2, time: '1 Sec' },
      { step: 3, time: '1 Sec' },
      { step: 4, time: '1 Sec' },
      { step: 5, time: '1 Sec' }
    ]
  },
  {
    number: 5,
    pn: 'ZG 3344',
    line: 'B',
    ct: '6 Sec',
    time: '00:00:06',
    status: 'NG',
    videoId: '1MNO345DriveVideoID',
    processes: [
      { step: 1, time: '2 Sec' },
      { step: 2, time: '1.5 Sec' },
      { step: 3, time: '1 Sec' },
      { step: 4, time: '0.8 Sec' },
      { step: 5, time: '0.7 Sec' }
    ]
  },
  {
    number: 6,
    pn: 'ZG 7788',
    line: 'C',
    ct: '3.5 Sec',
    time: '00:00:03',
    status: 'OK',
    videoId: '1PQR678DriveVideoID',
    processes: [
      { step: 1, time: '0.6 Sec' },
      { step: 2, time: '0.7 Sec' },
      { step: 3, time: '0.8 Sec' },
      { step: 4, time: '0.7 Sec' },
      { step: 5, time: '0.7 Sec' }
    ]
  },
  {
    number: 7,
    pn: 'ZG 9988',
    line: 'A',
    ct: '2.5 Sec',
    time: '00:00:02',
    status: 'OK',
    videoId: '1STU901DriveVideoID',
    processes: [
      { step: 1, time: '0.5 Sec' },
      { step: 2, time: '0.5 Sec' },
      { step: 3, time: '0.5 Sec' },
      { step: 4, time: '0.5 Sec' },
      { step: 5, time: '0.5 Sec' }
    ]
  },
  {
    number: 8,
    pn: 'ZG 4433',
    line: 'B',
    ct: '4 Sec',
    time: '00:00:04',
    status: 'NG',
    videoId: '1VWX234DriveVideoID',
    processes: [
      { step: 1, time: '1 Sec' },
      { step: 2, time: '1 Sec' },
      { step: 3, time: '1 Sec' },
      { step: 4, time: '0.5 Sec' },
      { step: 5, time: '0.5 Sec' }
    ]
  },
  {
    number: 9,
    pn: 'ZG 5566',
    line: 'C',
    ct: '3 Sec',
    time: '00:00:03',
    status: 'OK',
    videoId: '1YZA567DriveVideoID',
    processes: [
      { step: 1, time: '0.7 Sec' },
      { step: 2, time: '0.7 Sec' },
      { step: 3, time: '0.8 Sec' },
      { step: 4, time: '0.4 Sec' },
      { step: 5, time: '0.4 Sec' }
    ]
  },
  {
    number: 10,
    pn: 'ZG 6677',
    line: 'A',
    ct: '4.5 Sec',
    time: '00:00:05',
    status: 'NG',
    videoId: '1BCD890DriveVideoID',
    processes: [
      { step: 1, time: '1 Sec' },
      { step: 2, time: '1 Sec' },
      { step: 3, time: '1 Sec' },
      { step: 4, time: '0.75 Sec' },
      { step: 5, time: '0.75 Sec' }
    ]
  }
];


  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = productData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="px-6 flex flex-col p-[30px] bg-gray-100 min-h-screen overflow-hidden">
  <div className="ml-6">
    <Filter
      date={date}
      product={product}
      partNumber={partNumber}
      shift={shift}
      line={line}
      process={process}
      onDateChange={handleDateChange}
      onProductChange={handleProductChange}
      onPartChange={handlePartChange}
      onShiftChange={handleShiftChange}
      onLineChange={handleLineChange}
      onProcessChange={handleProcessChange}
      onClearFilters={handleClearFilters}
    />
  </div>

<div className="flex justify-between gap-6 cammera_product">
  {/* Camera Section */}
  <div className="flex-[1.3] min-w-[300px] ">
    <CameraFeed />
  </div>

  {/* Product Cards */}
  <div className="flex-[1.7] min-w-[500px] m-4">
    <div className="pmbg bg-white p-4 rounded shadow" style={{ maxHeight: '700px' }}>
      <h3 className="text-xl font-semibold  bg-white text">
        Monitoring Product
      </h3>

      <div className="overflow-y-auto max-h-[600px] space-y-4 card">
        {productData.map((product, idx) => (
          <div key={product.number} className="relative">
            <ProductCard
                key={product.number}
                number={product.number}
                pn={product.pn}
                line={product.line}
                ct={product.ct}
                time={product.time}
                status={product.status}
                processes={product.processes}
                videoId={product.videoId}  // ส่ง videoId เข้าไป
              />
          </div>
        ))}
      </div>

    </div>
  </div>
</div>

</div>

  );
};

export default Monitoring;
