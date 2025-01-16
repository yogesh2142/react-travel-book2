# Project Requirements

## Pages

### For All Users:

1. **`/`** - Home Page
2. **`/home`** - Home Page
3. **`/pricing`** - Pricing Page
4. **`/product`** - Product Page
5. **`/login`** - Login Page

### For Authenticated Users:

6. **`/app`** - Main App Page
7. **`/app/cities`** -
    - Load City List
    - Load Map
8. **`/app/countries`** -
    - Load Country List
    - Load Map

---

## Page Details

### Home Page

1. **Nav**
2. **Hero Section**
    - Description
    - Call-to-Action (CTA)

### Pricing Page

1. **Nav**
2. **Pricing Details**

### Product Page

1. **Nav**
2. **Product Details**

### Login Page

1. **Nav**
2. **Login Form**

### App Page

**AppPage (cities, isLoading, error)**

1. **SideBar**

    - **CityList**
        - City
        - City
        - City
        - City
        - City
    - **CountryList**
    - **CityDetails**
    - **AddCityForm**

2. **Map**

---

## Component Tree / React Element Tree / Virtual DOM

-   **App**
    -   **HomePage**
    -   **ProductPage**
    -   **LoginPage**
    -   **CityProvider** (cities)
        -   **AppPage**
            -   **SideBar**
                -   **AppNav**
                -   **CityList**
                    -   **CityItem**
                    -   **CityItem**
                    -   **CityItem**
                    -   **CityItem**
                -   **CountryList**
                -   **AddCityForm**
                -   **CityDetails**
            -   **Map**

---

## useReducer Plan

### Actions:

1. **`cities/load`**
2. **`city/load`**
3. **`city/delete`**
4. **`city/update`**
5. **`city/create`**
6. **`loading`**
7. **`rejected`**

### State:

```javascript
state = {
    cities: [],
    city: null,
    loading: false,
    error: null,
};
```
