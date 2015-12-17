class CreateBudgets < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.integer :number

      t.timestamps null: false
    end
  end
end
