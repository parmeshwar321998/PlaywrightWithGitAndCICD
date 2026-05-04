import { test, expect } from '@playwright/test';

test("Checking URL",async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
})
test("Validating Title",async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
})
test("Element Visible",async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await expect(page.getByRole('link',{name:'Home'})).toBeVisible();
    
})