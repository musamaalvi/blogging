db.aboutus.update({ _id: ObjectId("60f6bde245fa277c181d3c16") }, {
    $set: {
        "name": "Jane Dow",
        "title": "CEO & Founder",
        "description": "Some text that describes me lorem ipsum ipsum lorem.",
        "email": "jane@example.com",
        "image":"team3.jpg"
    }
})