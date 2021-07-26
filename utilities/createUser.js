export const createUser = (user) => {
    const customUser = {
        gender: user.results.gender,
        email: user.email,
        name: user.name,
        picture: user.picture.large,
        phone: user.phone,
    }
    return customUser;
}