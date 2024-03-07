const generateBizNumber = () => {
  return Math.floor(Math.random() * 10_000_000);
};

const normalizeCard = (card) => {
  const bizNumber = card.bizNumber || generateBizNumber();

  return {
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.webUrl,
    image: {
      url: card.imageUrl,
      alt: card.imageAlt,
    },
    address: {
      state: card.state,
      country: card.country,
      city: card.city,
      street: card.street,
      houseNumber: card.houseNumber
        ? Number(card.houseNumber)
        : card.houseNumber,
      zip: card.zip ? Number(card.zip) : card.zip,
    },
    likes: [],
    User_Id: card.user_Id,
    bizNumber: bizNumber,
  };
};

export default normalizeCard;

// BizNumber: card.bizNumber,
// User_id: card.user_Id,
